import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Profile from './sections/profile/profile'
import Stack from './sections/stack/stack'
import Projects from './sections/projects/projects'
import { Contact } from './sections/contact/contact'

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  return (
    <>
        <Profile />
        <Stack />
        <Projects />
        <Contact />
        <Navbar />
    </>
  )
}

export default App
