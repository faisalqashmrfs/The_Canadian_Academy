import { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import RightCourse from '../../Components/RightCourse/RightCourse'
import './Courses.css'

export default function Courses() {

  const [activ , setactiv] = useState(0)
  return (
    <div>
      <Hero title1={"Discover Our Language"} title2={"courses"} p={"Discover a diverse selection of language courses crafted to fit learners from all backgrounds. Whether you’re starting a new language or advancing your skills, our programs blend interactive teaching with real-world practice. Learn, connect, and gain the confidence to use your new language in everyday life and professional settings."}/>
      <div className='Controllh'>
        <button onClick={() => setactiv(0)} className={activ == 0 ? 'activebtn' : ''}>English</button>
        <button onClick={() => setactiv(1)} className={activ == 1 ? 'activebtn' : ''}>Mandarin</button>
      </div>
        <div>
        <RightCourse />
        </div>
    </div>
  )
}
