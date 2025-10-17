import './Inroll.css'
import Hero from '../../Components/Hero/Hero'
import { useState } from 'react'

export default function Inroll() {

    const [progress, setprogress] = useState(0)

    return (
        <div>
            <Hero title1={"The Canadian"} title2={"Academy"} height={true} />
            <div className='inrollWindows'>
                <div className='Progressbar'>
                    <div onClick={() => setprogress(0)}> 
                        <img src="/Vectoron.svg" alt="" />
                        <p>Personal Info</p>
                    </div>
                    <span style={{ backgroundColor: `${progress > 0 ? "red" : "gray"}` }}></span>
                    <div onClick={() => setprogress(1)}>
                        <img src={progress > 0 ? "/Vectoron.svg" : "/Vectoroff.svg"} alt="" />
                        <p>Course Info</p>
                    </div>
                    <span style={{ backgroundColor: `${progress > 1 ? "red" : "gray"}` }}></span>
                    <div onClick={() => setprogress(2)}>
                        <img src={progress > 1 ? "/Vectoron.svg" : "/Vectoroff.svg"} alt="" />
                        <p>Confirmation</p>
                    </div>
                </div>
                <div className='automaticform'>
                    {progress == 0 &&
                        <nav action="" className='form1'>
                            <div>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <select name="Country" id="">
                                <option value="">Country</option>
                                <option value="">Country</option>
                                <option value="">Country</option>
                            </select>
                            <input type="text" placeholder='Phone' />
                            <input type="text" placeholder='Eamil' />
                            <button onClick={() => setprogress(1)}>Continue</button>
                        </nav>
                    }
                    {progress == 1 &&
                        <nav action="" className='form1'>
                            <select name="Country" id="">
                                <option value="">Country</option>
                                <option value="">Country</option>
                                <option value="">Country</option>
                            </select>
                            <select name="Country" id="">
                                <option value="">Country</option>
                                <option value="">Country</option>
                                <option value="">Country</option>
                            </select>
                            <select name="Country" id="">
                                <option value="">Country</option>
                                <option value="">Country</option>
                                <option value="">Country</option>
                            </select>
                            <select name="Country" id="">
                                <option value="">Country</option>
                                <option value="">Country</option>
                                <option value="">Country</option>
                            </select>
                            <button onClick={() => setprogress(2)}>Continue</button>
                        </nav>
                    }
                    {progress == 2 &&
                        <nav action="" className='form1'>
                            good
                        </nav>
                    }

                    <img src="/Image9999.png" alt="" />
                </div>
            </div>
        </div>
    )
}
