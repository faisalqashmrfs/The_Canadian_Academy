import { useEffect, useState } from 'react'
import './Meetourteam.css'

export default function Meetourteam() {

    const [status, setstatus] = useState(1)

    const [widthscreen, setWidthscreen] = useState(window.innerWidth);
    const [widtharia, setWidtharia] = useState(28);
    const [father, setfather] = useState(195);
    const [transs, settranss] = useState(33.4);

    const handleResize = () => {
        setWidthscreen(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (widthscreen <= 1155 && widthscreen >= 750) {
            setWidtharia(45);
            setfather(300)
            settranss(51)
        } else if (widthscreen <= 750) {
            setWidtharia(96);
            setfather(600)
            settranss(100.5)
        }
    }, [widthscreen]);



    useEffect((widthscreen) => {
        console.log(widthscreen);
    }, [widthscreen])

    return (
        <div className='Meetourteam'>
            <h2 className='title'>Meet  our team</h2>
            <div className='slide' >
                <div className='son' style={{ transform: `translateX(-${transs * status}vw)`, width: `${father}vw` }}>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/Imageteatcher.png" alt="" />
                        <div>
                            <h2>John Doe</h2>
                            <span>English Teacher</span>
                            <p>Passionate about literature and creative writing.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/Imaget2.png" alt="" />
                        <div>
                            <h2>Jane Smith</h2>
                            <span>ESL Instructor</span>
                            <p>Focuses on immersive language experiences.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/Imaget3.png" alt="" />
                        <div>
                            <h2>Emily Johnson</h2>
                            <span>Language Arts Educator</span>
                            <p>Specializes in interactive learning techniques.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/Imageteatcher.png" alt="" />
                        <div>
                            <h2>John Doe</h2>
                            <span>English Teacher</span>
                            <p>Passionate about literature and creative writing.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/Imaget2.png" alt="" />
                        <div>
                            <h2>Jane Smith</h2>
                            <span>ESL Instructor</span>
                            <p>Focuses on immersive language experiences.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/Imaget3.png" alt="" />
                        <div>
                            <h2>Emily Johnson</h2>
                            <span>Language Arts Educator</span>
                            <p>Specializes in interactive learning techniques.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='ControllBtnslideteam'>
                <button className={status == 0 ? "activeatedteam" : ""} onClick={() => setstatus(0)}></button>
                <button className={status == 1 ? "activeatedteam" : ""} onClick={() => setstatus(1)}></button>
                <button className={status == 2 ? "activeatedteam" : ""} onClick={() => setstatus(2)}></button>
                <button className={status == 3 ? "activeatedteam" : ""} onClick={() => setstatus(3)}></button>
            </div>
        </div>
    )
}
