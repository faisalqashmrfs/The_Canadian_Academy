import { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import RightCourse from '../../Components/RightCourse/RightCourse'
import './Courses.css'

export default function Courses() {

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
  const Mandarin = [
    {
      id: 6,
      title: "HSK ( Hanyu Shuiping Kaoshi )",
      description: "HSK & HSKK Courses at The Canadian Academy The Canadian Academy proudly offers comprehensive HSK (Hanyu Shuiping Kaoshi) and HSKK (HSK  ..",
      span1: "Flexibility in timing",
      span2: "7 14 years",
      image: "Image(6).png",
    },
    {
      id: 7,
      title: "YCT ( Youth Chinese Test )",
      description: "The Canadian Academy is proud to offer the Youth Chinese Test (YCT) — an internationally recognized assessment designed to evaluate the Chinese language proficiency of young learners.Tailored for students ..",
      span1: "IELTS - Lingua",
      span2: "PTE",
      image: "Image(7).png",
    },
    {
      id: 8,
      title: "Professional Business Mandarin",
      description: "The Canadian Academy offers a specialized Business Chinese Test (BCT) preparation course designed for professionals looking to enhance their Mandarin skills in a business context.Our expert instructors ..",
      span1: "Flexibility in timing",
      span2: "4-Skills",
      image: "Image(8).png",
    },
    {
      id: 9,
      title: "VIP Mandarin Course",
      description: "Experience the ultimate in language learning with VIP Mandarin at The Canadian Academy   a premium one-on-one course tailored specifically to your goals, pace, and interestsh ..",
      span1: "Choose your hours",
      span2: "One to One Teaching",
      image: "Courses.png",
    },
    {
      id: 10,
      title: "Summer/Winter Camp",
      description: "Are you ready for a Camp of learning, laughter, and new friendships? The Canadian Academy’s Language Camp is the perfect opportunity for students to boost their Mandarin skills in a fun, immersive ..",
      span1: "Choose your Time",
      image: "Image(10).png",
    },
  ]

  const [activ, setactiv] = useState(0)

  const [Data, setData] = useState(englesh)

  return (

    <div>
      <Hero title1={"Discover Our Language"} inrole={true} title2={"courses"} p={"Discover a diverse selection of language courses crafted to fit learners from all backgrounds. Whether you’re starting a new language or advancing your skills, our programs blend interactive teaching with real-world practice. Learn, connect, and gain the confidence to use your new language in everyday life and professional settings."} sing={true}/>
      <div className='Controllh'>
        <button onClick={() => (setactiv(0), setData(englesh))} className={activ == 0 ? 'activebtn' : ''}>English</button>
        <button onClick={() => (setactiv(1), setData(Mandarin))} className={activ == 1 ? 'activebtn' : ''}>Mandarin</button>
      </div>
      <div>
        <RightCourse englesh={Data} />
      </div>
    </div>
  )
}
