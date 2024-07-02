import { ContactForm } from '../../components/contactForm/contactForm'
import './contact.css'

export function Contact () {
    return(
        <section className='sectionContainerContact'>
            <h5>Contact</h5>
            <ContactForm />
        </section>
    )
}