import Hero from '../../Components/Hero/Hero';
import Taps from '../../Components/Taps/Taps';
import ContactForm from '../../Components/ContactForm/ContactForm';
import './HelpCenter.css';

export default function Courses() {
  return (
    <div className="help-center-page">
      {/*  القسم الأول: الهيرو */}
      <Hero
        sing={true}
        title1="You Need a Help"
        title2="For Get Here"
        p="Start your journey with us through a simple and transparent admission process. Whether you are applying locally or internationally, our team is here to guide you every step of the way—from choosing the right program to submitting your application and preparing for enrollment."
      />

      {/*  القسم الثاني: التبويبات */}
      <Taps />

      {/*  القسم الثالث: نموذج التواصل */}
      <section className="contact-section bg-white py-5">
        <div className="">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
