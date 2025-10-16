import { useState } from 'react';
import './Taps.css';
import CertificateSearch from '../CertificateSearch/CertificateSearch';


export default function Taps() {
    const [active, setactive] = useState(0);

    return (
        <section className='TapsandContant'>
            <div className='div1'>
                <div className='div2'>
                    <button className={active === 0 ? "active" : ""} onClick={() => setactive(0)}>Studying In Malaysia</button>
                    <button className={active === 1 ? "active" : ""} onClick={() => setactive(1)}>How To Apply</button>
                    <button className={active === 2 ? "active" : ""} onClick={() => setactive(2)}>VISA</button>
                    <button className={active === 3 ? "active" : ""} onClick={() => setactive(3)}>Acomodation</button>
                    <button className={active === 4 ? "active" : ""} onClick={() => setactive(4)}>Certificate</button>
                </div>
            </div>

            <div>
                {active === 0 && <div className='section1'>0</div>}
                {active === 1 && <div className='section2'>1</div>}
                {active === 2 && <div className='section3'>2</div>}
                {active === 3 && <div className='section4'>3</div>}
                {active === 4 && (
                    <div className='section5'>
                        <CertificateSearch />
                    </div>
                )}
            </div>
        </section>
    );
}
