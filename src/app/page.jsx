import Certification from '@/components/Certification';
import ChatBotButton from '@/components/ChatBotButton';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

export default function Home() {  
  
  return (
    <div>
      <Hero />
      <Testimonials />
      <Certification />
      <ChatBotButton />
      <div className='bg-foreground/5 backdrop-blur-sm dark:bg-white/10'>
        <Footer />
      </div>
    </div>
  );
}
