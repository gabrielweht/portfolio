import './navbar.css'
import IconComponent from '../iconCoponents/iconComponent';
import { navbarLinksLower, navbarLinksUpper } from '../../utils/navbarLinks';
import { useState } from 'react';

function Navbar() {
    const [iconHovered, setIconHovered] = useState(null)

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
                                >
                                    <Icon className='icon' />
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