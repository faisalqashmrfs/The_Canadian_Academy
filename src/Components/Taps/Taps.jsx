import { useState } from 'react'
import './Taps.css'

export default function Taps() {

    const [active , setactive] = useState(0)

  return (
    <section className='TapsandContant'>
        <div className='div1'>
            <div className='div2'>
                <button className={active == 0 ? "active" : ""} onClick={() => setactive(0)}>Studying In Malaysia</button>
                <button className={active == 1 ? "active" : ""} onClick={() => setactive(1)}>How To Apply</button>
                <button className={active == 2 ? "active" : ""} onClick={() => setactive(2)}>VISA</button>
                <button className={active == 3 ? "active" : ""} onClick={() => setactive(3)}>Acomodation</button>
                <button className={active == 4 ? "active" : ""} onClick={() => setactive(4)}>Certificate</button>
            </div>
        </div>
        <div>
      
            {active == 0 ? <div>0</div> : <></>} {/*   القسم الأول  */}
            {active == 1 ? <div>1</div> : <></>} {/* القسم الثاني  */}
            {active == 2 ? <div>2</div> : <></>} {/* القسم الثالث  */}
            {active == 3 ? <div>3</div> : <></>} {/* القسم الرابع  */}
            {active == 4 ? <div>4</div> : <></>} {/* القسم الخامس  */}
        </div>
        
    </section>
  )
}
