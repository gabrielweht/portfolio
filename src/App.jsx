import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Profile from './sections/profile/profile'
import Stack from './sections/stack/stack'
import Projects from './sections/projects/projects'
import { Contact } from './sections/contact/contact'
import { Footer } from './components/footer/footer'
import { About } from './sections/about/about'

function App() {

  const [, setVisibleSection] = useState('');

  useEffect(() => {

    if (!window.location.hash) {
      window.location.hash = '#profile'
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const viewportHeight = window.innerHeight;

      const middlePosition = (scrollTop + viewportHeight) / 20;

      const sections = document.querySelectorAll('.section');
      let visibleSectionId = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= middlePosition && rect.bottom >= middlePosition) {
          visibleSectionId = section.id;
        }
      });

      if (visibleSectionId !== '') {
        window.history.replaceState(null, null, `#${visibleSectionId}`);
      }

      setVisibleSection(visibleSectionId);

    };

    if(window.innerWidth > 991) {
      window.addEventListener('scroll', handleScroll);
    }


    return () => {
      if(window.innerWidth > 991) {
        window.removeEventListener('scroll', handleScroll);
      }
    };

  }, [])

  return (
    <>
        <Profile />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Navbar />
        <Footer />
    </>
  )
}

export default App
