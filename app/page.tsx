import NavBar from '@/components/ui/NavBar';
import Hero from '@/app/pages/Hero';
import About from '@/app/pages/About';
import Contact from '@/app/pages/Contact';
import Archives from '@/app/pages/Archives';
import Work from './Work/page';
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Archives />
      <Contact />
    </>
  );
}
