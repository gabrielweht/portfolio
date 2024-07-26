import { ContactForm } from '../../components/contactForm/contactForm'
// import contactImage from '../../assets/contactImage.webp'
import contactImage from '../../assets/contactImage.webp'
import './contact.css'

export function Contact () {
    return(
        <section className='sectionContainerContact section' id='contact'>
            <h5>CONTACT ME</h5>
            <div className='divContactForm'>
                <ContactForm /> 
                <img src={contactImage} alt="contact image" />
            </div>
        </section>
    )
}