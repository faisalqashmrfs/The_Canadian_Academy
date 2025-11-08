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
                        <img src="/tech/Ted.png" alt="" />
                        <div>
                            <h2>Ted</h2>
                            <span>English Specialist Teacher</span>
                            <p>Passionate British teacher focused on modern learning.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/tech/Antony.png" alt="" />
                        <div>
                            <h2>Antony</h2>
                            <span>English Specialist Teacher</span>
                            <p>Passionate New Zealander skilled in cultural exchange.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/tech/Ben.png" alt="" />
                        <div>
                            <h2>Ben</h2>
                            <span>English Specialist Teacher</span>
                            <p>Passionate UK teacher inspiring confident speaking.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/tech/Marshal.png" alt="" />
                        <div>
                            <h2>Marshal</h2>
                            <span>English Teacher</span>
                            <p>Passionate Slovak educator promoting clear expression.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/tech/Zach.png" alt="" />
                        <div>
                            <h2>Zach</h2>
                            <span>English Teacher</span>
                            <p>Passionate Malaysian mentor fostering creative minds.</p>
                        </div>
                    </div>
                    <div style={{ width: `${widtharia}vw` }} className="one">
                        <img src="/tech/Leen.png" alt="" />
                        <div>
                            <h2>Leen</h2>
                            <span>English Teacher</span>
                            <p>Passionate Syrian teacher guiding student success.</p>
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
