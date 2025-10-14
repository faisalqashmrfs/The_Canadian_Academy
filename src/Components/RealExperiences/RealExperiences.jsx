import { useState } from 'react'
import './RealExperiences.css'

export default function RealExperiences() {

    const widtharia = 60
    const [buttons , setbuttons] = useState(0)

    const x = "I want to share my incredible journey at the Canadian Academy. Coming all the way from Europe, I always dreamed of studying abroad, and this place made that dream a reality. The instructors here are amazing—they guided me every step of the way, helping me not just learn English, but also build my confidence in speaking. The lessons were so engaging, and I loved the cultural exchanges that allowed me to dive deep into the English-speaking world. Now, I’m thriving at university in Canada, making friends from all over the globe. If you’re looking to start your own adventure, I highly recommend joining the Canadian Academy!"
  return (
    <section className='RealExperiences'>
        <div className='Infoslide'>
            <h2>Real Experiences,</h2>
            <h3>Real Results</h3>
            <p>“Discover how students around the world improved their skills and achieved their goals with The Canadian Academy.</p>
            <div className='sLIDEaREA'>
                <h4>Hi there! I’m Sarah </h4>
                <div className='slidewindows'>
                    <p style={{transform:`translateX(-${widtharia * buttons}vw)`}}>
                    <div>{x}</div>
                    <div>{x}</div>
                    <div>{x}</div>
                    <div>{x}</div>
                    <div>{x}</div>
                    </p>
                </div>
                <div>
                    <button className={buttons == 0 ? '' : ''} onClick={() => setbuttons(0)}></button>
                    <button className={buttons == 0 ? '' : ''} onClick={() => setbuttons(1)}></button>
                    <button className={buttons == 0 ? '' : ''} onClick={() => setbuttons(2)}></button>
                    <button className={buttons == 0 ? '' : ''} onClick={() => setbuttons(3)}></button>
                    <button className={buttons == 0 ? '' : ''} onClick={() => setbuttons(4)}></button>
                </div>
            </div>
        </div>
    </section>
  )
}
