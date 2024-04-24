/* eslint-disable react/prop-types */

import LabelLi from "./labelLi"

function Labels({ navbarLinks, iconDisplay }) {
    return (
        <div className='labels'>
            {
                navbarLinks.map((links) => {

                    return (
                        <LabelLi
                            links={links}
                            iconDisplay={iconDisplay}
                            key={links.key}
                        />
                    )
                })
            }
        </div>
    )
}

export default Labels