import React from 'react';
import { motion } from 'motion/react';
import { Play, Globe, Gamepad2, Monitor, Smartphone } from 'lucide-react';
import { Project } from '../../types';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  onWatchPreview: (url: string) => void;
}

const getPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('pc')) return <Monitor className="h-3 w-3" />;
  if (p.includes('mobile')) return <Smartphone className="h-3 w-3" />;
  return <Gamepad2 className="h-3 w-3" />;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onWatchPreview }) => {
  const projectColor = project.color || '#fb5057';
  
  return (
    <motion.div 
      className="group relative min-h-[60vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out scale-110 group-hover:scale-100 grayscale hover:grayscale-0"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        {/* Color Overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-multiply md:opacity-80 transition-opacity duration-700 md:group-hover:opacity-40"
          style={{ backgroundColor: projectColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151927] via-transparent to-transparent opacity-90 md:opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center py-24 md:py-32">
        <div className="max-w-3xl relative">
          {/* Tags & Studio Logo ALIGNED */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  {project.year}
                </span>
                {project.status && (
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {project.status}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.platforms?.map((platform) => (
                  <span 
                    key={platform}
                    className="px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 flex items-center gap-2"
                  >
                    {getPlatformIcon(platform)}
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {project.studioLogoUrl && (
              <div className="hidden md:block">
                <img 
                  src={project.studioLogoUrl} 
                  alt="Studio Logo" 
                  className="h-24 w-auto object-contain transition-all duration-300 hover:scale-105 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Mobile Studio Logo (Simplified) */}
          {project.studioLogoUrl && (
            <div className="md:hidden absolute top-0 right-0 -mt-12">
              <img 
                src={project.studioLogoUrl} 
                alt="Studio Logo" 
                className="h-12 w-auto object-contain opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Logo / Title */}
          <div className="mb-8 min-h-[140px] flex flex-col justify-center">
            {project.gameLogoUrl ? (
              <div className="h-40 flex items-center">
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
                    } as React.CSSProperties}
                    className="h-full w-full max-w-[700px]"
                  />
                ) : (
                  <img 
                    src={project.gameLogoUrl} 
                    alt={`${project.title} logo`} 
                    style={{ transform: `scale(${project.logoScale || 1})` }}
                    className={cn(
                      "h-full w-auto max-w-[550px] object-contain object-left origin-left drop-shadow-2xl",
                      project.invertLogo && "md:brightness-0 md:invert"
                    )}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            ) : (
              <h2 
                className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter text-white transition-all duration-300 drop-shadow-2xl md:group-hover:opacity-80"
              >
                {project.title}
              </h2>
            )}
          </div>

          <div className="flex flex-col mb-6">
            <div className="text-foreground md:text-white font-bold uppercase tracking-widest text-sm md:text-base">
              {project.role} {project.focusArea && <span className="opacity-60 font-medium">· {project.focusArea}</span>}
            </div>
          </div>

          <p className="text-foreground/80 md:text-white/90 leading-relaxed text-base md:text-lg font-medium mb-8">
            {project.description}
          </p>

          {/* Links */}
          {(project.videoUrl || project.websiteUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.videoUrl && (
                <motion.button
                  onClick={() => onWatchPreview(project.videoUrl!)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/5 md:bg-white/10 hover:bg-primary/10 md:hover:bg-white/20 backdrop-blur-md border border-primary/10 md:border-white/20 text-primary md:text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl group/btn cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Watch Preview</span>
                </motion.button>
              )}
              {project.websiteUrl && (
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#151927] md:bg-white text-white md:text-[#151927] hover:bg-[#151927]/90 md:hover:bg-white/90 text-xs font-bold uppercase tracking-widest transition-all shadow-xl group/btn cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Official Site</span>
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
