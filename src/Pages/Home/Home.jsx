import './Home.css'
import Hero from '../../Components/Hero/Hero'
import InternationalAccreditations from '../../Components/InternationalAccreditations/InternationalAccreditations'
import UsDifferent from '../../Components/UsDifferent/UsDifferent'
import RightCourse from '../../Components/RightCourse/RightCourse'
import RealExperiences from '../../Components/RealExperiences/RealExperiences'
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function Home() {
  return (
    <>
      <Hero title1={"The Canadian"} title2={"Academy"} span={"Master Languages, Connect Globally"} p={"At The Canadian Academy, we make language learning simple, engaging, and tailored to your journey. Learn from expert teachers, practice real-world communication, and discover new cultures — all in one vibrant community."} buttom={true} />
      <InternationalAccreditations />
      <UsDifferent />
      <RightCourse btn="Explore More Courses"/>
      <RealExperiences />
      <ContactForm />
    </>
  )
}
