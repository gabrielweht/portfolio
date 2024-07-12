import ImgProfile from '../../components/imgProfile/ImgProfile';
import './profile.css'


function Profile() {

    return (
        <section id='profile' className="sectionProfile section">
            <header className='headerPresentation'>
                <ImgProfile />
                <div className='typingAnimation'>
                    <h1>{'Hello, I´m Gabriel Weht'}</h1>
                </div>
                <div className='typingAnimation'>
                    <h2>Full Stack Developer</h2>
                </div>
            </header>
            <div className='divAboutMe'>
                <p>Driven Software Developer skilled in NodeJS, React, Redux, Sequelize, and SQL Server. Passionate about creating innovative, scalable solutions and solving complex problems. Adept in agile environments with a strong focus on teamwork, customer satisfaction, and results. Eager to grow professionally, learn new skills, and contribute to team success.</p>
            </div>
        </section>
    )
}

export default Profile;