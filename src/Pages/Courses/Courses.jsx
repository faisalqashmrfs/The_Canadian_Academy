import { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import RightCourse from '../../Components/RightCourse/RightCourse'
import './Courses.css'

export default function Courses() {

const englesh = [
        {
            title : "English For Kids",
            description : "At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ..",
            span1 : "Flexibility in timing",
            span2 : "7–14 years",
            image : "Imagec1.png",
        },
        {
            title : "Academic English",
            description : "Looking to boost your confidence in meetings, presentations, and academic writing? At The Canadian Academy in Bukit Bintang, we help you communicate clearly, write professional theses and reports, and ..",
            span1 : "IELTS",
            span2 : "PTEh",
            image : "Imagec2.png",
        },
        {
            title : "Professional Business English",
            description : "Take your career to the next level with our Business English Success course — designed for working professionals who want to excel in today’s global workplace. Whether you need to speak with confidence ..",
            span1 : "Flexibility in timing",
            span2 : "4-Skills",
            image : "Imagec3.png",
        },
        {
            title : "VIP English Course",
            description : "Unlock a premium language learning experience with our Elite English Program for VIPs at The Canadian Academy. Designed as a fully personalized, one-on-one course, VIP English adapts to your ..",
            span1 : "Choose your hours",
            span2 : "One to One Teaching",
            image : "Courses.png",
        },
        {
            title : "Summer/Winter Camp",
            description : "Are you ready for a summer of learning, laughter, and new friendships? The Canadian Academy’s Language Camp is the perfect opportunity for students to boost their English skills in a fun, immersive ..",
            span1 : "Flexibility in timing",
            span2 : "Choose your Time",
            image : "Imagec5.png",
        },
    ]

  const [activ , setactiv] = useState(0)
  return (
    <div>
      <Hero title1={"Discover Our Language"} title2={"courses"} p={"Discover a diverse selection of language courses crafted to fit learners from all backgrounds. Whether you’re starting a new language or advancing your skills, our programs blend interactive teaching with real-world practice. Learn, connect, and gain the confidence to use your new language in everyday life and professional settings."}/>
      <div className='Controllh'>
        <button onClick={() => setactiv(0)} className={activ == 0 ? 'activebtn' : ''}>English</button>
        <button onClick={() => setactiv(1)} className={activ == 1 ? 'activebtn' : ''}>Mandarin</button>
      </div>
        <div>
        <RightCourse englesh={englesh}/>
        </div>
    </div>
  )
}
