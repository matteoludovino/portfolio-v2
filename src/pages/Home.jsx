import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import GitHubDashboard from '../components/GitHubDashboard';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <GitHubDashboard />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
