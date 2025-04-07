'use client';
import { useState } from 'react';
import Certification from '@/components/Certification';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import CyberChatBot from "@/components/CyberChatBot";
import { MessageCircle, X } from 'lucide-react';

export default function Home() {

  const [showChatBot, setShowChatBot] = useState(false);
  
  return (
    <div>
      <Hero />
      <Testimonials />
      <Certification />
      {/* Chat Toggle Button */}
      <button
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center 
                   bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg 
                   transition-all duration-200 hover:scale-110 z-50"
        aria-label="Toggle chat"
      >
        {showChatBot ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-8 bg-white dark:bg-gray-800 
                    shadow-lg rounded-lg overflow-hidden transition-all duration-300 
                    transform ${showChatBot ? 'translate-y-0 opacity-100' : 
                    'translate-y-10 opacity-0 pointer-events-none'}`}
      >
        <CyberChatBot />
      </div>
      <div className='bg-foreground/5 backdrop-blur-sm dark:bg-white/10'>
        <Footer />
      </div>
    </div>
  );
}
