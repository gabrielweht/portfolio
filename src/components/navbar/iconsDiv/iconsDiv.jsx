/* eslint-disable react/prop-types */
import IconsDivLi from "./iconsDivLi"

function IconsDiv({ navbarLinks, setIconHovered, isActive }) {
    return (
        <div className='navbarDiv'>
            {
                navbarLinks.map((links) => {

                    return (
                        <IconsDivLi
                            links={links}
                            setIconHovered={setIconHovered}
                            isActive={isActive}
                            key={links.key}
                        />
                    )
                })
            }
        </div>
    )
}

export default IconsDiv