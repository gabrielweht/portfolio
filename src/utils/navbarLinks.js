import { FaRegUserCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import curriculum from '../assets/Gabriel Weht - CV - Software Developer.pdf'

export const navbarLinks = [
    {
        stylesName: 'ulIconsUpper',
        key: 1,
        list: [
            {
                href: '#profile',
                spanText: 'Profile',
                download: false,
                icon: FaRegUserCircle,
                key: 3,
            },
            {
                href: '#stacks',
                spanText: 'Stacks',
                download: false,
                icon: FaLaptopCode,
                key: 4,
            },
            {
                href: '#projects',
                spanText: 'Projects',
                download: false,
                icon: IoBriefcaseOutline,
                key: 5,
            },
            {
                href: '#contact',
                spanText: 'Contact',
                download: false,
                icon: RiContactsBook3Line,
                key: 6,
            },
            {
                href: curriculum,
                download: true,
                spanText: 'Download resume',
                icon: MdOutlineCloudDownload,
                key: 7,
            }
        ]
    },
    {
        stylesName: 'ulIconsLower',
        key: 2,
        list: [
            {
                href: 'https://github.com/gabrielweht',
                spanText: 'Github profile',
                target: '_blank',
                icon: FaGithub,
                key: 8
            },
            {
                href: 'https://www.linkedin.com/in/gabriel-weht/',
                spanText: 'Linkedin profile',
                target: '_blank',
                icon: FaLinkedin,
                key: 9
            }
        ]
    }
]