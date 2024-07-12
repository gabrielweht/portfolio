import cabsaDesktop from '../assets/cabsaDesktop.webp';
import cabsaMobile from '../assets/cabsaMobile.webp';
import cabsaTablet from '../assets/cabsaTablet.webp';
import kurveDesktop from '../assets/kurveDesktop.webp';
import kurveMobile from '../assets/kurveMobile.webp';
import kurveTablet from '../assets/kurveTablet.webp';
import RyMdesktop from '../assets/RyMdesktop.webp';
import RyMmobile from '../assets/RyMmobile.webp';
import RyMtablet from '../assets/RyMtablet.webp';
import SiCss3 from "../assets/css.webp";
import SiTypescript from "../assets/ts.webp";
import SiNextdotjs from "../assets/nextjs.webp";
import Angular from '../assets/angular.webp';
import Vite from '../assets/viteLogo.webp';
import JavaScript from '../assets/js.webp';


export const projectList = [
  {
    id: 'CABSA',
    title: 'Cabsa Intl.',
    description: 'Website of the financial company Cabsa Intl, where you can see information about the services they offer and a contact form connected to EmailJS.',
    url: 'https://cabsaintl.com/',
    github: '',
    images: [
      {
        title: 'cabsaDesktop',
        image: cabsaDesktop
      },
      {
        title: 'cabsaMobile',
        image: cabsaMobile
      },
      {
        title: 'cabsaTablet',
        image: cabsaTablet
      }
    ],
    stack: [
      {
        title: 'NextJS',
        icon: SiNextdotjs
      },
      {
        title: 'TypeScript',
        icon: SiTypescript
      },
      {
        title: 'CSS3',
        icon: SiCss3
      },
    ],
  },
  {
    id: 'Kurve',
    title: 'Kurve Inc.',
    description: 'Sitio web informativo de la empresa Kurve para informar sobre su IA y sus beneficios. With a contact form connected to EmailJS.',
    url: 'https://kurve.ai/',
    github: '',
    images: [
      {
        title: 'kurveDesktop',
        image: kurveDesktop
      },
      {
        title: 'kurveMobile',
        image: kurveMobile
      },
      {
        title: 'kurveTablet',
        image: kurveTablet
      }
    ],
    stack: [
      {
        title: 'ViteJS',
        icon: Vite
      },
      {
        title: 'JavaScript',
        icon: JavaScript
      },
      {
        title: 'CSS3',
        icon: SiCss3
      },
    ]
  },
  {
    id: 'RyM',
    title: 'Rick & Morty',
    description: 'Practice website to show my Angular skills. The page consumes data from the Rick and Morty API.',
    url: 'https://rickandmorty-proyect-gw.vercel.app/personajes',
    github: 'https://github.com/gabrielweht/Rick-Morty',
    images: [
      {
        title: 'RyMdesktop',
        image: RyMdesktop
      },
      {
        title: 'RyMmobile',
        image: RyMmobile
      },
      {
        title: 'RyMtablet',
        image: RyMtablet
      }
    ],
    stack: [
      {
        title: 'Angular',
        icon: Angular
      },
      {
        title: 'TypeScript',
        icon: SiTypescript
      },
      {
        title: 'CSS3',
        icon: SiCss3
      },
    ],
    
  }
]