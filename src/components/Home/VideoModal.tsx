import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  activeVideo: string | null;
  onClose: () => void;
}

export default function VideoModal({ activeVideo, onClose }: VideoModalProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <AnimatePresence>
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
        >
          <div 
            className="absolute inset-0 bg-[#151927]/95 backdrop-blur-xl" 
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl border-2 border-white/10"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -top-12 right-0 md:-right-12 text-white/60 hover:text-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                <X className="h-8 w-8" />
              </div>
            </motion.button>
            <iframe
              src={getYouTubeEmbedUrl(activeVideo)}
              title="Project Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
