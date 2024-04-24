/* eslint-disable react/prop-types */

function LabelLi({ links, iconDisplay }) {

    return (
        <ul className={`ulIcons ${links.stylesName}`} key={links.key}>
            {links.list.map((link, key) => {
                return (
                    <li key={link.key} className='liSpanText' style={iconDisplay(link.href, key)}>
                        <div className='spanTextContainer'>
                            <span className='spanText'>{link.spanText}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default LabelLi