import cabsaImage from '../assets/CabsaImage.webp'
import SiCss3 from "../assets/css.webp";
import SiTypescript from "../assets/ts.webp";
import SiNextdotjs from "../assets/nextjs.webp";

export const projectList = [
  {
    title: 'CABSA',
    images: [
      {
        title: 'cabsaDesktop',
        image: cabsaImage
      }
    ],
    description: 'Sitio web de Financiera',
    stack: [
      {
        title: 'Next JS',
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
    url: 'https://cabsaintl.com/',
    github: 'https://github.com/anmedina-arg/CABSA'
  }
]