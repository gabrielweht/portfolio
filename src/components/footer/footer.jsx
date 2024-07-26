import { navbarLinks } from '../../utils/navbarLinks'
import viteLogo from '../../assets/viteLogo.webp'
import js from '../../assets/js.webp'
import css3 from '../../assets/css.webp'
import myLogo from '../../assets/GabrielWeht.webp'
import './footer.css'

export function Footer() {
  return (
    <section className='sectionFooter'>
      <div className='divLogoContainer'>
        <a href="#profile">
          <img src={myLogo} alt="My logo" className='myLogo'/>
        </a>
        <div className='divLinksFooter'>
          {navbarLinks[1].list.map((link) => {
            const Icon = link.icon

            return (
              <a href={link.href} target={link.target} key={link.key} className='aIconLinks'>
                <Icon className='iconFooter'/>
              </a>
            )
          })}
        </div>
      </div>
      <div className='divSiteMap'>
        SITE MAP
        <ul>
          {navbarLinks[0].list.map((link) => {
            if (link.key >= 3 && link.key <= 6) {
              return (
                <li key={link.key}>
                  <a href={link.href} className='aFooterLinks'>
                    {link.spanText}
                  </a>
                </li>
              )
            }
          })}
        </ul>
      </div>
      <div className='divSiteMap'>
        ABOUT THIS WEB
          <span>
            Created with:
          </span>
          <ul className='ulAbout'>
            <li>
              <img src={viteLogo} alt="logo vite" className='logoFooter' />
              Vite
            </li>
            <li>
              <img src={js} alt="logo vite" className='logoFooter' />
              JavaScript
            </li>
            <li>
              <img src={css3} alt="logo vite" className='logoFooterCss' />
              CSS 3
            </li>
          </ul>
          <span style={{'margin': '0'}}>
          by <b>Gabriel Weht</b>
          </span>
      </div>
    </section>
  )
}