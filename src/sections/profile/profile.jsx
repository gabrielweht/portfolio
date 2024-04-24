import './profile.css'
import imgProfile from "../../assets/imgProfile.webp"

function Profile() {

    return (
        <section id='profile' className="sectionProfile">
            <div className='divProfile'>
                <div className='divPresentation'>
                    <img src={imgProfile} alt="Profile Photo" />
                    <div className='typingAnimation'>
                        <h1>{'Hello, I´m Gabriel Weht'}</h1>
                    </div>
                    <div className='typingAnimation'>
                        <h2>Full Stack Developer</h2>
                    </div>
                </div>
                <div className='divAboutMe'>
                    {/* <h3>About me</h3> */}
                    <p>Highly motivated Full Stack Developer with experience in developing and maintaining applications. Passionate about problem-solving and creating innovative and scalable solutions. Experience working with NodeJS, React, Redux, Angular, SQL Server, among other industry technologies. Possesses creative thinking, autonomy, problem-solving skills, customer and results orientation, adaptability, and ability to work in a team in an agile development environment. My goal is to continue growing professionally and learning new skills to improve my performance and contribute to the success of my team and the company.</p>
                </div>
            </div>

        </section>
    )
}

export default Profile;