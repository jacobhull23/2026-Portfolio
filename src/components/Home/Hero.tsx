import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden bg-background text-foreground border-b-4 border-primary min-h-[70vh] flex items-center">
      {/* Background Decorative Section & Profile Image */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 pointer-events-none">
        {/* Blue skew background */}
        <div className="absolute inset-0 bg-accent/20 md:bg-accent/10 skew-x-12 translate-x-1/4 z-10" />
        
        {/* Profile Image container - fix stretching */}
        <div className="absolute inset-0 flex items-center justify-center md:items-center md:justify-center translate-x-0 md:translate-x-1/4">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full max-w-[400px] max-h-[400px] md:max-w-[550px] md:max-h-[550px]"
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQGQXZoRe6NfgQ/profile-displayphoto-scale_400_400/B56Z2Y6JIhKYAg-/0/1776386872512?e=1778112000&v=beta&t=WtDjtF4-FImprwLlUrZPrPjxWhouwbLCe0JFumdtbOs" 
              alt="Jacob Hull" 
              className="w-full h-full object-contain grayscale brightness-110 opacity-60 md:opacity-50 transition-all duration-1000 hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            {/* Vignette/Fade overlay specific to the image area */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-20" />
          </motion.div>
        </div>
        
        {/* Full section gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background z-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter uppercase mb-8">
            Senior Producer & <br />
            <span className="text-primary">Product Manager</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <p className="text-xl md:text-2xl font-medium max-w-xl leading-snug">
              Leading cross-functional teams to build and ship world-class digital products, social systems, and impactful user experiences.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary/30" />
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 vertical-text md:horizontal-text">
                Currently @ Riot Games
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
