import { ContactForm } from '../../components/contactForm/contactForm'
import './contact.css'

export function Contact () {
    return(
        <section className='sectionContainerContact section' id='contact'>
            <h5>CONTACT ME</h5>
            <ContactForm />
        </section>
    )
}