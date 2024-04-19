/* eslint-disable react/prop-types */
import './iconComponent.css';

function IconComponent({ children, href, target, download = false, setIconHovered, isActive}) {

    return (
        <li className='liIcons'>
            <a
                href={href}
                className={`aIcons ${isActive}`}
                target={target}
                download={download}
                onMouseEnter={() => setIconHovered(href)}
                onMouseLeave={() => setIconHovered(null)}
            >
                {children}
            </a>
        </li>
    )
}

export default IconComponent