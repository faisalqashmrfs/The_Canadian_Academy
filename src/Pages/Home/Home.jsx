import './Home.css'
import Hero from '../../Components/Hero/Hero'
import InternationalAccreditations from '../../Components/InternationalAccreditations/InternationalAccreditations'
import UsDifferent from '../../Components/UsDifferent/UsDifferent'
import RightCourse from '../../Components/RightCourse/RightCourse'
import RealExperiences from '../../Components/RealExperiences/RealExperiences'
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function Home() {

  const englesh = [
    {
      id: 1,
      title: "English For Kids",
      description: "At The Canadian Academy, we make learning English an exciting adventure for children aged 7 14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ..",
      span1: "Flexibility in timing",
      span2: "7 14 years",
      image: "Imagec1.png",
    },
    {
      id: 2,
      title: "Academic English",
      description: "Looking to boost your confidence in meetings, presentations, and academic writing? At The Canadian Academy in Bukit Bintang, we help you communicate clearly, write professional theses and reports, and ..",
      span1: "IELTS",
      span2: "PTEh",
      image: "Imagec2.png",
    },
    {
      id: 3,
      title: "Professional Business English",
      description: "Take your career to the next level with our Business English Success course — designed for working professionals who want to excel in today’s global workplace. Whether you need to speak with confidence ..",
      span1: "Flexibility in timing",
      span2: "4-Skills",
      image: "Imagec3.png",
    },
    {
      id: 4,
      title: "VIP English Course",
      description: "Unlock a premium language learning experience with our Elite English Program for VIPs at The Canadian Academy. Designed as a fully personalized, one-on-one course, VIP English adapts to your ..",
      span1: "Choose your hours",
      span2: "One to One Teaching",
      image: "Courses.png",
    },
    {
      id: 5,
      title: "Summer/Winter Camp",
      description: "Are you ready for a summer of learning, laughter, and new friendships? The Canadian Academy’s Language Camp is the perfect opportunity for students to boost their English skills in a fun, immersive ..",
      span1: "Flexibility in timing",
      span2: "Choose your Time",
      image: "Imagec5.png",
    },
  ]

  return (
    <>
      <Hero title1={"The Canadian"} title2={"Academy"} span={"Master Languages, Connect Globally"} p={"At The Canadian Academy, we make language learning simple, engaging, and tailored to your journey. Learn from expert teachers, practice real-world communication, and discover new cultures — all in one vibrant community."} buttom={true} sing={true} inrole={true}/>
      <InternationalAccreditations />
      <UsDifferent />
      <RightCourse btn="Explore More Courses" englesh={englesh}/>
      <RealExperiences />
      <ContactForm />
    </>
  )
}
