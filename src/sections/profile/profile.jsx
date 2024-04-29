import './profile.css'
import imgProfile from "../../assets/imgProfile.webp"

function Profile() {

    return (
        <section id='profile' className="sectionProfile section">
            <header className='headerPresentation'>
                <img src={imgProfile} alt="Profile Photo" />
                <div className='typingAnimation'>
                    <h1>{'Hello, I´m Gabriel Weht'}</h1>
                </div>
                <div className='typingAnimation'>
                    <h2>Full Stack Developer</h2>
                </div>
            </header>
            <div className='divAboutMe'>
                <p>Highly motivated Software Developer with experience in development and
                    application maintenance. Passionate about problem solving
                    and the creation of innovative and scalable solutions. Experience
                    working in NodeJS, React, Redux, Sequelize, SQL Server among others
                    technologies of the sector. With creative thinking, autonomy, resolution of
                    problems, customer and results orientation, adaptability, ability
                    to work as a team in an agile development environment. My goal is to continue
                    growing professionally and learning new skills to improve my
                    performance and contribute to the success of my team and the company.</p>
            </div>
        </section>
    )
}

export default Profile;