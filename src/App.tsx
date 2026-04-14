import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  PenTool, 
  Briefcase, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Trophy,
  Calendar,
  Layers,
  ArrowUpRight,
  Send,
  Monitor,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { EXPERIENCES, PROJECTS, WRITINGS } from './constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const getPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('pc')) return <Monitor className="h-3 w-3" />;
  if (p.includes('mobile')) return <Smartphone className="h-3 w-3" />;
  return <Gamepad2 className="h-3 w-3" />;
};

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-2xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors">
            Jacob Hull
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#writing" className="hover:text-accent transition-colors">Writing</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <a href="https://www.linkedin.com/in/jacobhull" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="rounded-none bg-primary hover:bg-foreground hover:text-background px-6 font-bold uppercase tracking-widest text-[10px] transition-all duration-300">
              Resume
            </Button>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden bg-background text-foreground border-b-4 border-primary">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 skew-x-12 translate-x-1/4 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter uppercase mb-8">
                Senior Producer & <br />
                <span className="text-primary">Program Manager</span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-xl">
                  <p className="text-xl md:text-2xl font-medium leading-tight text-foreground/70 mb-8">
                    Delivering complex, cross-functional products from concept to launch across games and technology.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <a href="#projects" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-foreground hover:text-background text-primary-foreground rounded-none h-14 px-10 text-sm font-bold uppercase tracking-widest transition-all duration-300">
                        Explore Projects
                      </Button>
                    </a>
                    <div className="flex items-center justify-center sm:justify-start gap-6 px-6 h-14 border border-foreground/20 w-full sm:w-auto">
                      <a href="https://www.linkedin.com/in/jacobhull" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                        <Linkedin className="h-5 w-5" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Primary Focus */}
        <section id="projects" className="py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-primary" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Selected Works</h2>
                </div>
                <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-foreground">Shipped & <br />In-Flight</h3>
              </div>
              <p className="max-w-md text-foreground/60 font-medium">
                A highlight of major titles and platforms I've helped bring to life across Riot Games, ZA/UM, TT Games, and more.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-32"
            >
              {PROJECTS.map((project) => {
                const projectColor = project.color || 'var(--accent)';
                const isLight = project.color ? (
                  (() => {
                    const hex = project.color.replace('#', '');
                    const r = parseInt(hex.substring(0, 2), 16);
                    const g = parseInt(hex.substring(2, 4), 16);
                    const b = parseInt(hex.substring(4, 6), 16);
                    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                    return brightness > 180;
                  })()
                ) : false;

                return (
                  <motion.div 
                    key={project.id} 
                    className="group relative flex flex-col border-2 border-primary/10 transition-colors"
                    whileInView="active"
                    viewport={{ margin: "-20% 0px -20% 0px" }}
                    style={{ '--project-color': projectColor } as React.CSSProperties}
                    variants={{
                      active: { borderColor: projectColor, opacity: 1, y: 0 },
                      initial: { borderColor: 'rgba(var(--primary), 0.1)', opacity: 0, y: 20 }
                    }}
                    initial="initial"
                  >
                    <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-muted">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="object-cover w-full h-full transition-all duration-1000 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity hidden md:block" />
                    </div>
                      
                    <div className="md:absolute md:bottom-0 md:left-0 w-full p-6 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8 z-10 bg-background md:bg-transparent">
                        <div className="max-w-2xl">
                          <div className="flex flex-col gap-3 mb-6">
                            <div>
                              <Badge 
                                style={{ backgroundColor: projectColor }}
                                className={`rounded-none font-mono text-[9px] uppercase tracking-widest px-4 h-6 inline-flex items-center justify-center border border-foreground/10 shadow-lg shadow-foreground/20 ${isLight ? 'text-black' : 'text-white'}`}
                              >
                                <span className="leading-none">{project.year}</span>
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2 md:hidden">
                              {project.platforms?.map((platform) => (
                                <div 
                                  key={platform}
                                  className="h-6 px-3 bg-black/5 border border-black/10 flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-foreground shadow-sm"
                                >
                                  {getPlatformIcon(platform)}
                                  <span>{platform}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="hidden md:flex flex-wrap gap-2">
                            {project.platforms?.map((platform) => (
                              <div 
                                key={platform}
                                className="h-6 px-3 bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-white shadow-sm"
                              >
                                {getPlatformIcon(platform)}
                                <span>{platform}</span>
                              </div>
                            ))}
                          </div>
                        {project.gameLogoUrl ? (
                          <div className="mb-8 h-16 md:h-40 flex items-center">
                            {project.useColorForLogo ? (
                              <div 
                                style={{ 
                                  backgroundColor: projectColor,
                                  maskImage: `url(${project.gameLogoUrl})`,
                                  WebkitMaskImage: `url(${project.gameLogoUrl})`,
                                  maskSize: 'contain',
                                  WebkitMaskSize: 'contain',
                                  maskRepeat: 'no-repeat',
                                  WebkitMaskRepeat: 'no-repeat',
                                  maskPosition: 'left center',
                                  WebkitMaskPosition: 'left center',
                                  transform: `scale(${project.logoScale || 1})`,
                                  transformOrigin: 'left center'
                                }}
                                className="h-full w-full max-w-[280px] md:max-w-[700px]"
                              />
                            ) : (
                              <img 
                                src={project.gameLogoUrl} 
                                alt={project.title} 
                                style={{ transform: `scale(${project.logoScale || 1})` }}
                                className={`h-full w-auto max-w-[240px] md:max-w-[550px] object-contain object-left origin-left ${project.invertLogo ? 'md:brightness-0 md:invert' : ''}`}
                                referrerPolicy="no-referrer"
                              />
                            )}
                          </div>
                        ) : (
                          <h4 
                            className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tighter text-foreground md:text-white mb-4 transition-colors"
                            style={{ '--hover-color': projectColor } as React.CSSProperties}
                          >
                            <span className="group-hover:text-[var(--hover-color)] transition-colors">{project.title}</span>
                          </h4>
                        )}
                        <div className="flex flex-col mb-6">
                          <div className="text-foreground md:text-white font-bold uppercase tracking-widest text-sm md:text-base">
                            {project.role} {project.focusArea && <span className="opacity-60 font-medium">· {project.focusArea}</span>}
                          </div>
                        </div>
                        <p className="text-foreground/80 md:text-white/90 leading-relaxed text-base md:text-lg font-medium">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Experience Section - Secondary Focus */}
        <section id="experience" className="py-32 bg-background border-y">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
              <div>
                <div className="sticky top-32">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-accent" />
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Career Path</h2>
                  </div>
                  <h3 className="text-5xl font-display font-bold uppercase tracking-tighter mb-8">Experience <br />& Impact</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    A decade of leading projects across AAA games, live service platforms, and early-stage products — from concept through launch and live operations.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {EXPERIENCES.map((exp) => (
                  <motion.div 
                    key={exp.id}
                    {...fadeIn}
                    className="group relative pl-12 border-l-2 border-primary/10 hover:border-primary transition-colors pb-12 last:pb-0"
                    whileInView="active"
                    viewport={{ margin: "-30% 0px -30% 0px" }}
                  >
                    <motion.div 
                      className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary transition-colors duration-300"
                      variants={{
                        active: { backgroundColor: 'var(--primary)' }
                      }}
                    />
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-display font-bold uppercase tracking-tight">{exp.company}</h4>
                        <div className="text-primary font-bold uppercase tracking-widest text-[10px]">{exp.role}</div>
                      </div>
                      <motion.div
                        variants={{
                          active: { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderColor: 'var(--primary)' }
                        }}
                        className="rounded-none font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-primary/10 bg-primary/5 text-primary/80 shrink-0 transition-colors duration-300 flex items-center justify-center"
                      >
                        {exp.period}
                      </motion.div>
                    </div>
                    <p className="text-foreground/60 mb-6 max-w-2xl font-medium">
                      {exp.description}
                    </p>
                    <div className="grid grid-cols-1 gap-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <div className="mt-1.5 h-1.5 w-1.5 bg-primary/40 shrink-0" />
                          <span className="opacity-80 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="writing" className="py-32 px-6 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-primary" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Publications</h2>
                </div>
                <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">Articles</h3>
              </div>
              <div className="hidden md:block">
                <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest text-xs h-14 px-10">
                  Full Archive
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {WRITINGS.map((writing) => (
                <motion.a 
                  key={writing.id}
                  href={writing.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10 }}
                  className="p-8 border-2 border-primary/5 hover:border-primary transition-all group flex flex-col h-full bg-background shadow-sm"
                >
                  <div className="mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">
                      {writing.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors flex-grow">
                    {writing.title}
                  </h4>
                  <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                      {writing.publication}
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="md:hidden">
              <Button variant="outline" className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest text-xs h-14">
                Full Archive
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-6 translate-y-1/4 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="text-left">
                <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8">Get In Touch</h2>
                <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
                  Let's build the <br />next big <span className="text-primary underline decoration-4 underline-offset-8">experience</span>.
                </h3>
                <p className="text-secondary-foreground/60 text-lg mb-12 max-w-md">
                  Have a project in mind? Looking for production leadership? Drop me a message and let's talk.
                </p>
                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/jacobhull" target="_blank" rel="noopener noreferrer" className="p-4 border border-secondary-foreground/20 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <Card className="rounded-none border-none bg-background/5 backdrop-blur-xl p-8 shadow-2xl shadow-black/50">
                <form 
                  action="https://formsubmit.co/jacobhull23@gmail.com" 
                  method="POST"
                  onSubmit={() => setFormStatus('submitting')}
                  className="space-y-6"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Portfolio Message!" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://www.jacobhull.me" />
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-primary">Name</Label>
                    <Input id="name" name="name" required className="rounded-none border-none bg-[#ece5de] text-[#151927] focus:ring-2 focus:ring-primary transition-colors h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-primary">Email</Label>
                    <Input id="email" name="email" type="email" required className="rounded-none border-none bg-[#ece5de] text-[#151927] focus:ring-2 focus:ring-primary transition-colors h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-primary">Message</Label>
                    <div className="relative">
                      <Textarea id="message" name="message" required className="rounded-none border-none bg-[#ece5de] text-[#151927] focus:ring-2 focus:ring-primary transition-colors min-h-[150px]" />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground h-14 font-bold uppercase tracking-widest text-xs"
                  >
                    {formStatus === 'idle' && <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                    {formStatus === 'submitting' && "Sending..."}
                    {formStatus === 'success' && "Message Sent!"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <a href="/" className="font-display text-3xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors">
            Jacob Hull
          </a>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
            <a href="#projects" className="hover:text-primary hover:opacity-100 transition-all">Projects</a>
            <a href="#experience" className="hover:text-primary hover:opacity-100 transition-all">Studio History</a>
            <a href="#writing" className="hover:text-primary hover:opacity-100 transition-all">Publications</a>
            <a href="#contact" className="hover:text-primary hover:opacity-100 transition-all">Contact</a>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-30">
            © {new Date().getFullYear()} Jacob Hull.
          </div>
        </div>
      </footer>
    </div>
  );
}
