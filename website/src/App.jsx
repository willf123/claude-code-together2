import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
