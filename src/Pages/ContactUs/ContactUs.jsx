import './ContactUs.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Hero from '../../Components/Hero/Hero';
import ContactHero from '../../Components/ContactHero/ContactHero';

export default function ContactUs() {
  return (
    <>
      <ContactHero  title1={"There Something"} title11={"in you Mind"} title2={"Feel Free "} title3={"and Let's Talk"} sing={true} inrole={true}/>
      <div className="contact-page">
        <ContactForm />
      </div>
    </>
  );
}
