import './ContactUs.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Hero from '../../Components/Hero/Hero';

export default function ContactUs() {
  return (
    <>
      <Hero title1={"There Something "}/>
      <div className="contact-page">
        <ContactForm />
      </div>
    </>
  );
}
