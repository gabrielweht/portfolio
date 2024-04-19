import { FaRegUserCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import curriculum from '../assets/Gabriel Weht - CV - Software Developer.pdf'

export const navbarLinksUpper = [
    {
        href: '#profile',
        spanText: 'Profile',
        download: false,
        icon: FaRegUserCircle
    },
    {
        href: '#stacks',
        spanText: 'Stacks',
        download: false,
        icon: FaLaptopCode
    },
    {
        href: '#projects',
        spanText: 'Projects',
        download: false,
        icon: IoBriefcaseOutline
    },
    {
        href: '#contact',
        spanText: 'Contact',
        download: false,
        icon: RiContactsBook3Line
    },
    {
        href: curriculum,
        download: true,
        spanText: 'Download resume',
        icon: MdOutlineCloudDownload
    }
]

export const navbarLinksLower = [
    {
        href: 'https://github.com/gabrielweht',
        spanText: 'Github profile',
        target: '_blank',
        icon: FaGithub
    },
    {
        href: 'https://www.linkedin.com/in/gabriel-weht/',
        spanText: 'Linkedin profile',
        target: '_blank',
        icon: FaLinkedin
    }
]