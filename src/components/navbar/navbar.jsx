import './navbar.css'
import IconComponent from '../iconCoponents/iconComponent';
import { navbarLinksLower, navbarLinksUpper } from '../../utils/navbarLinks';
import { useEffect, useState } from 'react';

function Navbar() {
    const [iconHovered, setIconHovered] = useState(null)
    const [hash, setHash] = useState('');

    useEffect(() => {
        setHash(window.location.hash);

        const handleHashChange = () => {
            setHash(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [hash]);

    function isActive(hrefValue, component) {
        if (hrefValue === hash && component !== 'icon') {
            return 'liActive'
        } else if (hrefValue === hash && component === 'icon') {
            return 'iconActive'
        }
    }

    function iconDisplay(hrefValue, keyValue) {

        if (iconHovered !== hrefValue) {
            return {
                display: 'none'
            }
        } else {
            return {
                gridRow: `${(keyValue + 1)}/${(keyValue + 2)}`
            }
        }
    }

    return (
        <section className='sectionNavbar'>
            <div className='navbarDiv'>
                <ul className='ulIcons ulIconsUpper'>
                    {navbarLinksUpper.map((link, key) => {
                        const Icon = link.icon

                        return (
                            <>
                                <IconComponent
                                    key={key}
                                    href={link.href}
                                    download={link.download}
                                    setIconHovered={setIconHovered}
                                    isActive={isActive(link.href)}
                                >
                                    <Icon className={`icon ${isActive(link.href, 'icon')}`} />
                                </IconComponent>
                            </>
                        )
                    })}
                </ul>
                <ul className='ulIcons ulIconsLower'>
                    {navbarLinksLower.map((link, key) => {
                        const Icon = link.icon

                        return (
                            <>
                                <IconComponent
                                    key={key}
                                    href={link.href}
                                    target={link.target}
                                    setIconHovered={setIconHovered}
                                >
                                    <Icon className='icon' />
                                </IconComponent>
                            </>
                        )
                    })}
                </ul>
            </div>
            <div className='labels'>
                <ul className='ulIcons ulIconsUpper'>
                    {navbarLinksUpper.map((link, key) => {
                        return (
                            <>
                                {
                                    <li key={key} className='liSpanText' style={iconDisplay(link.href, key)}>
                                        <div className='spanTextContainer'>
                                            <span className='spanText'>{link.spanText}</span>
                                        </div>
                                    </li>
                                }
                            </>
                        )
                    })}
                </ul>
                <ul className='ulIcons ulIconsLower'>
                    {navbarLinksLower.map((link, key) => {
                        return (

                            <li key={key} className='liSpanText' style={iconDisplay(link.href, key)}>
                                <div className='spanTextContainer'>
                                    <span className='spanText'>{link.spanText}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Navbar;