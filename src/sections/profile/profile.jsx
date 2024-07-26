import ImgProfile from '../../components/imgProfile/ImgProfile';
import { navbarLinks } from '../../utils/navbarLinks';
import './profile.css'


function Profile() {
    return (
        <section id='profile' className="sectionProfile section">
            <header className='headerPresentation'>
                <div className='divNameTitle'>
                    <div className='typingAnimation'>
                        <h1>Hello, I&apos;m Gabriel Weht</h1>
                    </div>
                    <div className='typingAnimation'>
                        <h2><span>And I&apos;m a </span>Full Stack Developer</h2>
                    </div>
                    <div className='divButtonsProfile'>
                        <a href="#contact" className='profileButtons'>Contact me</a>
                        <a href={navbarLinks[0].list[4].href} className='profileButtons' download={navbarLinks[0].list[4].download}>
                            Download CV
                        </a>
                    </div>
                    <div className='divLinksProfile'>
                        {navbarLinks[1].list.map((link) => {
                            const Icon = link.icon

                            return (
                                <a href={link.href} target={link.target} key={link.key} className='aIconLinks'>
                                    <Icon className='iconProfile' />
                                </a>
                            )
                        })}
                    </div>
                </div>
                <ImgProfile />
            </header>
        </section>
    )
}

export default Profile;