import './ContactUs.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Hero from '../../Components/Hero/Hero';

export default function ContactUs() {
  return (
    <>
      <Hero title1={"There Something "}/>
      <div className="contact-page">
        {/* ✅ Hero Section */}
        <header className="contact-hero text-white text-center py-5">
          <div className="container">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">We’d love to hear from you. Let’s connect!</p>
          </div>
        </header>

        {/* ✅ Contact Form + Map + Info */}
        <ContactForm />

        {/* ✅ Footer */}
      </div>
    </>
  );
}
