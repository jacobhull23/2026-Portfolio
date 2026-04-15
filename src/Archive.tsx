import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARCHIVE_WRITINGS } from './constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Footer from './components/Footer';

const categories = ['All', 'Recommended', 'Features', 'Game Reviews', 'News'];

export default function Archive() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = ARCHIVE_WRITINGS.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.publication.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#ece5de] text-[#151927] selection:bg-primary selection:text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-[#151927]/10 bg-[#ece5de]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="font-display text-xl font-bold tracking-tighter">
            Article Archive
          </div>
          <div className="w-24 hidden md:block" /> {/* Spacer */}
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-[0.85]">
              The <span className="text-primary">Archive</span>
            </h1>
            <p className="text-xl text-[#151927]/60 max-w-2xl font-medium leading-relaxed">
              A comprehensive collection of my published work across games, technology, and culture — spanning reviews, features, and industry news.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between border-y border-[#151927]/10 py-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                    activeCategory === cat 
                      ? 'bg-[#151927] text-white border-[#151927]' 
                      : 'bg-transparent text-[#151927]/60 border-[#151927]/10 hover:border-[#151927]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#151927]/40" />
              <Input 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-none border-[#151927]/10 bg-white/50 focus:bg-white transition-all h-10 text-xs font-medium"
              />
            </div>
          </div>

          {/* Article List */}
          <div className="space-y-1">
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                <>
                  {/* Recommended Grid - Only show when on 'All' or 'Recommended' and no search query */}
                  {(activeCategory === 'All' || activeCategory === 'Recommended') && !searchQuery && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {filteredArticles
                        .filter(a => a.category === 'Recommended')
                        .slice(0, 4)
                        .map((article, index) => {
                          const isInternal = article.link.startsWith('/');
                          const MotionLink = motion(Link);
                          
                          const cardContent = (
                            <>
                              {article.image && (
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                  <img 
                                    src={article.image} 
                                    alt="" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 opacity-30 group-hover:opacity-60"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#151927]/80 via-transparent to-transparent" />
                                </div>
                              )}
                              <div className="relative z-10 flex flex-col h-full p-8">
                                <div className="mb-auto">
                                  <span className="px-2 py-1 bg-primary text-white text-[8px] font-bold uppercase tracking-[0.2em]">
                                    {article.category}
                                  </span>
                                </div>
                                <div className="mt-12">
                                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-2 block">
                                    {article.publication}
                                  </span>
                                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors leading-tight">
                                    {article.title}
                                  </h3>
                                </div>
                              </div>
                            </>
                          );

                          const className = "relative h-[400px] border-2 border-[#151927]/5 hover:border-primary transition-all group flex flex-col bg-[#151927] shadow-sm cursor-pointer overflow-hidden";

                          if (isInternal) {
                            return (
                              <MotionLink
                                key={`featured-${article.id}`}
                                to={article.link}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={className}
                              >
                                {cardContent}
                              </MotionLink>
                            );
                          }

                          return (
                            <motion.a
                              key={`featured-${article.id}`}
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className={className}
                            >
                              {cardContent}
                            </motion.a>
                          );
                        })}
                    </div>
                  )}

                  {/* Regular List */}
                  <div className="space-y-1">
                    {filteredArticles
                      .filter(a => {
                        // If we're showing the grid, don't repeat those articles in the list below
                        if ((activeCategory === 'All' || activeCategory === 'Recommended') && !searchQuery) {
                          const featuredIds = filteredArticles
                            .filter(f => f.category === 'Recommended')
                            .slice(0, 4)
                            .map(f => f.id);
                          return !featuredIds.includes(a.id);
                        }
                        return true;
                      })
                      .map((article, index) => {
                        const isInternal = article.link.startsWith('/');
                        const MotionLink = motion(Link);
                        
                        const content = (
                          <>
                            {article.image && (
                              <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none z-0">
                                <img 
                                  src={article.image} 
                                  alt="" 
                                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ece5de]/40 to-[#ece5de] group-hover:to-[#f5f0eb] transition-colors duration-300" />
                              </div>
                            )}
                            <div className="flex-grow pr-8 relative z-10">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold">
                                  {article.category}
                                </span>
                                <span className="h-px w-4 bg-[#151927]/10" />
                                <span className="text-[9px] font-mono uppercase tracking-widest opacity-40">
                                  {article.publication}
                                </span>
                              </div>
                              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6 relative z-10">
                              <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                                {article.date}
                              </span>
                              <div className="h-10 w-10 rounded-full border border-[#151927]/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                                <ExternalLink className="h-4 w-4" />
                              </div>
                            </div>
                          </>
                        );

                        if (isInternal) {
                          return (
                            <MotionLink
                              key={article.id}
                              to={article.link}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.3, delay: index * 0.02 }}
                              className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-[#f5f0eb] transition-all duration-300 border-b border-[#151927]/5 cursor-pointer overflow-hidden"
                            >
                              {content}
                            </MotionLink>
                          );
                        }

                        return (
                          <motion.a
                            key={article.id}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-[#f5f0eb] transition-all duration-300 border-b border-[#151927]/5 cursor-pointer overflow-hidden"
                          >
                            {content}
                          </motion.a>
                        );
                      })}
                  </div>
                </>
              ) : (
                <div className="py-24 text-center">
                  <p className="text-[#151927]/40 font-mono uppercase tracking-widest text-xs">No articles found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
