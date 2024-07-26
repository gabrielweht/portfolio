import './about.css'
import aboutMeImage from '../../assets/aboutMeImage.webp'

export function About() {
  return (
    <section className='sectionAboutMe section'>
      <h5>ABOUT ME</h5>
      <div className='divAboutMe'>
        <img src={aboutMeImage} alt="about Me Image" className='aboutMeImage' />
        <p>Highly motivated Software Developer with experience in development and application maintenance. Passionate about problem-solving and creating innovative and scalable solutions. Experienced in working with NodeJS, React, Redux, Angular, SQL Server, among other industry technologies. Possesses creative thinking, autonomy, problem-solving skills, customer and results orientation, adaptability, and the ability to work as a team in an agile development environment. My goal is to continue growing professionally and learn new skills to improve my performance and contribute to the success of my team and the company.</p>
      </div>
    </section>
  )
}