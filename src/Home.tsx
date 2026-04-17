import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Home/Hero';
import ProjectsList from './components/Home/ProjectsList';
import ExperienceList from './components/Home/ExperienceList';
import WritingList from './components/Home/WritingList';
import ContactForm from './components/Home/ContactForm';
import VideoModal from './components/Home/VideoModal';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Lock body scroll when video is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeVideo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const apiUrl = `${window.location.origin}/api/contact`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setFormStatus('success');
        if (responseData.message && responseData.message.includes("Activation")) {
          alert(responseData.message);
        }
        setTimeout(() => setFormStatus('idle'), 3000);
        // Clear the form
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('idle');
        const errorMessage = responseData.error || 'Please try again later.';
        console.error('Contact form error details:', responseData);
        alert(`Failed to send message: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('idle');
      alert(`An error occurred while sending the request. Details: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans">
      <Navbar />

      <main>
        <Hero />
        <ProjectsList onWatchPreview={(url) => setActiveVideo(url)} />
        <ExperienceList />
        <WritingList />
        <ContactForm formStatus={formStatus} onSubmit={handleSubmit} />
      </main>

      <Footer />
      <VideoModal activeVideo={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
