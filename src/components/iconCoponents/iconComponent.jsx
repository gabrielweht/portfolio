/* eslint-disable react/prop-types */
import { useState } from 'react';
import './iconComponent.css';

function IconComponent({ children, href, target, download = false, spanText }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='divContainerAll'>
            <a
                href={href}
                className='aIcons'
                target={target}
                download={download}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </a>
            {
                <div className='spanTextContainer'>
                    <span className='spanText'>{spanText}</span>
                </div>
            }
        </div>
    )
}

export default IconComponent