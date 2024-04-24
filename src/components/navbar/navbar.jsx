import './navbar.css'
// import IconComponent from '../iconCoponents/iconComponent';
import { navbarLinks } from '../../utils/navbarLinks';
import { useEffect, useState } from 'react';
import Labels from './labels/labels';
import IconsDiv from './iconsDiv/iconsDiv';

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
            <IconsDiv
                navbarLinks={navbarLinks}
                setIconHovered={setIconHovered}
                isActive={isActive}
            />
            <Labels
                navbarLinks={navbarLinks}
                iconDisplay={iconDisplay}
            />
        </section>
    )
}

export default Navbar;