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
                {active === 0 &&
                    <div className='section1'>
                       <div>
                       </div>
                        <p>Malaysia is rapidly becoming one of the top destinations for international students seeking quality education abroad. Known for its unique blend of academic excellence, affordability, and cultural diversity, Malaysia offers an outstanding environment for higher education. With world-class universities, modern campuses, and internationally recognized degrees, students gain valuable qualifications that are respected across the globe.
                        English is widely spoken in academic settings, making Malaysia an accessible and welcoming choice for students from different backgrounds. Whether pursuing undergraduate or postgraduate studies, learners benefit from strong academic support systems, innovative teaching methods, and opportunities for research and career development.
                        In addition to its high-quality education, Malaysia is celebrated for its affordability compared to other study destinations. Tuition fees and living costs are relatively low, allowing students to enjoy an excellent standard of living without financial strain. The country’s safe and vibrant cities, reliable public transportation, and diverse lifestyle options create a comfortable environment where international students can thrive.
                        From the excitement of modern city life to the warmth of local communities, studying in Malaysia combines academic growth with cultural enrichment. For students seeking a globally relevant education, affordable living, and opportunities beyond the classroom, Malaysia stands out as an ideal study destination.</p>
                    </div>
                }
                {active === 1 &&
                    <div className='section2'>
                        <div className='info1'>
                            <div className='leftinfo'>
                                <h2>
                                    Study Periods
                                    <span>Longer than 6 Months:</span>
                                </h2>
                                <p>You will need to apply for a student visa. The supporting documents you must provide are:</p>
                                <p><img src="/Bullet.svg" alt="" />Two passport-size photos with a white background.</p>
                                <p><img src="/Bullet.svg" alt="" />Application Form.</p>
                                <p><img src="/Bullet.svg" alt="" />Health Declaration Form<a href='https://visa.educationmalaysia.gov.my/media/docs/Lampiran_B_-_Health_Declaration_Form_For_Applicant.pdf'>(can be downloaded here)</a>.</p>
                                <p><img src="/Bullet.svg" alt="" />High school and most recent academic certificates.</p>
                                <p><img src="/Bullet.svg" alt="" />Scanned files of all pages of your passport, with at least 1 year of validity. </p>
                                <p><img src="/Bullet.svg" alt="" />Proof of Payment.</p>
                            </div>
                            <img className='rightImages' src="/Imageyoungleady.png" alt="" />
                        </div>
                        <div className='info2'>
                            <h2>
                                    Study Periods
                                    <span>Less than 6 Months:</span>
                                </h2>
                                <p>You can apply for a visitor visa. Required documents include:</p>
                                <p><img src="/Bullet.svg" alt="" />One passport-size photo with a white background.</p>
                                <p><img src="/Bullet.svg" alt="" />Application Form.</p>
                                <p><img src="/Bullet.svg" alt="" />Proof of payment.</p>
                        </div>
                    </div>
                }
                {active === 2 &&
                    <div className='section3'>
                        <div className='Leftinfo'>
                            <h2>
                                Are you Foreigner??
                                <span>Need Help?</span>
                            </h2>
                            <p><img src="/Bullet.svg" alt="" />If you're a foreigner and plan to study <span>for 6 months or more</span>, you need a <span>visa</span> to study at The Canadian Academy in Bukit Bintang. It is better to start your application before leaving your home country. If you have entered Malaysia before your application, you may be required to leave the country and regain entry after your student visa is approved.</p>
                            <p><img src="/Bullet.svg" alt="" />Else, bring your passport (at least 1 year of validity) and fill out the Malaysia Digital Arrival Card prior to arrival. English is widely spoken in Kuala Lumpur, making the transition smooth even if you have not learned Malay.</p>
                            <p><img src="/Bullet.svg" alt="" />Let us know your nationality and course duration, and we can give you a step-by-step guide!</p>
                        </div>
                        <div className='Imagesrightside'>

                        </div>
                    </div>
                }
                {active === 3 &&
                    <div className='section4'>
                        <div className='BackIMgsec4'>
                        </div>
                        <span>Accommodation Options Near </span>
                        <h2>The Canadian Academy</h2>
                        <p><img src="/Bullet.svg" alt="" />There are a wide variety of accommodation choices available to suit every budget when studying at The Canadian Academy in Bukit Bintang, Kuala Lumpur. Whether you're looking for a modern condo, a private room, or a budget-friendly shared apartment, you'll find flexible options to meet your needs.</p>
                        <p><img src="/Bullet.svg" alt="" />While staying in the city center offers convenience, accommodations further from the city are often more affordable, making them a great choice for long-term stays.</p>
                        <p><img src="/Bullet.svg" alt="" />For the best balance of cost and convenience, we recommend finding accommodation along the Kajang MRT Line, as the Bukit Bintang MRT station Include Bukit bintang Monorail is just a few steps from the school. This makes daily commuting easy, fast, and budget-friendly—allowing you to enjoy both the energy of the city and the comfort of a home that fits your lifestyle.</p>
                    </div>
                }
                {active === 4 &&
                    <div className='section5'>
                        <CertificateSearch />
                    </div>
                }
            </div>
        </section>
    );
}
