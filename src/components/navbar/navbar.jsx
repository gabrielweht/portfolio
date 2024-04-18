import './navbar.css'
import IconComponent from '../iconCoponents/iconComponent';
import { navbarLinksLower, navbarLinksUpper } from '../../utils/navbarLinks';

function Navbar() {
    return (
        <section className='navbarSection'>
            <div className='divIcons'>
                {navbarLinksUpper.map((link, key) => {
                    const Icon = link.icon

                    return (
                        <IconComponent
                            key={key}
                            href={link.href}
                            download={link.download}
                            spanText={link.spanText}
                        >
                            <Icon className='icon' />
                        </IconComponent>
                    )
                })}
            </div>
            <div className='divIcons'>
                {navbarLinksLower.map((link, key) => {
                    const Icon = link.icon

                    return (
                        <IconComponent
                            key={key}
                            href={link.href}
                            target={link.target}
                            spanText={link.spanText}
                        >
                            <Icon className='icon' />
                        </IconComponent>
                    )
                })}
            </div>

        </section>
    )
}

export default Navbar;