import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARCHIVE_WRITINGS } from './constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

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
                filteredArticles.map((article, index) => (
                  <motion.a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-white transition-all duration-300 border-b border-[#151927]/5 cursor-pointer"
                  >
                    <div className="flex-grow pr-8">
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
                    <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                        {article.date}
                      </span>
                      <div className="h-10 w-10 rounded-full border border-[#151927]/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.a>
                ))
              ) : (
                <div className="py-24 text-center">
                  <p className="text-[#151927]/40 font-mono uppercase tracking-widest text-xs">No articles found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-[#151927]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-display text-2xl font-bold tracking-tighter">
            Jacob Hull
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
            © {new Date().getFullYear()} Article Archive
          </p>
        </div>
      </footer>
    </div>
  );
}
