/* eslint-disable react/prop-types */
import IconComponent from "../../iconCoponents/iconComponent"

function IconsDivLi({ links, setIconHovered, isActive }) {
    return (
        <ul className={`ulIcons ${links.stylesName}`} key={links.key}>
            {
                links.list.map((link) => {
                    const Icon = link.icon

                    return (
                        <IconComponent
                            key={link.key}
                            href={link.href}
                            download={link.download}
                            setIconHovered={setIconHovered}
                            isActive={isActive(link.href)}
                            target={link.target}
                        >
                            <Icon className={`icon ${isActive(link.href, 'icon')}`} />
                        </IconComponent>
                    )
                })
            }
        </ul>
    )
}

export default IconsDivLi