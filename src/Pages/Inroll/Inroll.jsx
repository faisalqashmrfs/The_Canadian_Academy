import './Inroll.css';
import Hero from '../../Components/Hero/Hero';
import { useState, useEffect } from 'react';

export default function Inroll() {
    const [progress, setprogress] = useState(0);

    useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
      .form-title {
        font-weight: 800;
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 25px;
      }

      .form-subtitle {
        font-size: 1.2rem;
        margin-top: 30px;
        margin-bottom: 15px;
        font-weight: bold;
      }

      .form-group-custom {
        position: relative;
        margin-bottom: 1.5rem;
      }

      .form-group-custom select,
      .form-group-custom textarea,
      .form-group-custom input {
        width: 100%;
        padding: 8px;
        border: none;
        border-bottom: 1px solid #ccc;
        background-color: transparent;
        font-size: 1rem;
        color: #333;
      }

      .form-group-custom select:focus,
      .form-group-custom textarea:focus,
      .form-group-custom input:focus {
        outline: none;
        border-color: #dc3545;
      }

      .toggle-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        font-size: 1rem;
        color: #6c757d;
      }

      .toggle-switch input {
        display: none;
      }

      .toggle-switch label {
        cursor: pointer;
        width: 40px;
        height: 20px;
        background: #ccc;
        border-radius: 10px;
        position: relative;
        transition: background-color 0.3s;
      }

      .toggle-switch label:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        transition: transform 0.3s;
      }

      .toggle-switch input:checked + label {
        background: #dc3545;
      }

      .toggle-switch input:checked + label:after {
        transform: translateX(20px);
      }

      .enroll-button {
        font-weight: bold;
        padding: 10px 0;
        width: 100%;
        margin-top: 20px;
        border-radius: 25px;
        background-color: #dc3545;
        color: #fff;
        font-size: 1.1rem;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .enroll-button svg {
        margin-left: 8px;
        width: 10px;
        height: 14px;
        fill: currentColor;
      }
    `;
        document.head.appendChild(styleTag);
        return () => document.head.removeChild(styleTag);
    }, []);

    return (
        <div>
            <Hero title1="The Canadian" title2="Academy" height={true} />
            <div className="inrollWindows">
                <div className="Progressbar">
                    <div onClick={() => setprogress(0)}>
                        <img src="/Vectoron.svg" alt="" />
                        <p>Personal Info</p>
                    </div>
                    <span style={{ backgroundColor: progress > 0 ? "red" : "gray" }}></span>
                    <div onClick={() => setprogress(1)}>
                        <img src={progress > 0 ? "/Vectoron.svg" : "/Vectoroff.svg"} alt="" />
                        <p>Course Info</p>
                    </div>
                    <span style={{ backgroundColor: progress > 1 ? "red" : "gray" }}></span>
                    <div onClick={() => setprogress(2)}>
                        <img src={progress > 1 ? "/Vectoron.svg" : "/Vectoroff.svg"} alt="" />
                        <p>Confirmation</p>
                    </div>
                </div>

                <div className="automaticform">
                    {/* الخطوة الأولى */}
                    {progress === 0 && (
                        <nav className="form1">
                            <h2 className="form-title">Personal Information</h2>
                            <div>
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <select name="Country" defaultValue="">
                                <option value="" disabled hidden>Country</option>
                                <option value="EG">Egypt</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="AE">UAE</option>
                            </select>
                            <input type="text" placeholder="Phone" />
                            <input type="email" placeholder="Email" />
                            <button onClick={() => setprogress(1)} className="enroll-button">
                                Continue
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                                    <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </button>
                        </nav>
                    )}

                    {/* الخطوة الثانية */}
                    {progress === 1 && (
                        <div className="form1">
                            <h2 className="form-title">Language</h2>
                            <form>
                                <div className="form-group-custom">
                                    <select required defaultValue="">
                                        <option value="" disabled hidden>Choose the Language</option>
                                        <option value="EN">English</option>
                                        <option value="AR">Arabic</option>
                                        <option value="FR">French</option>
                                    </select>
                                </div>

                                <div className="form-group-custom">
                                    <select required defaultValue="">
                                        <option value="" disabled hidden>Choose the Course Type</option>
                                        <option value="INTENSIVE">Intensive</option>
                                        <option value="GENERAL">General</option>
                                        <option value="CONVERSATION">Conversation</option>
                                    </select>
                                </div>

                                <div className="form-group-custom">
                                    <select required defaultValue="">
                                        <option value="" disabled hidden>Enroll Period</option>
                                        <option value="1M">1 Month</option>
                                        <option value="3M">3 Months</option>
                                        <option value="6M">6 Months</option>
                                    </select>
                                </div>

                                <h3 className="form-subtitle">Other Preference</h3>

                                <div className="toggle-group">
                                    <label htmlFor="vipHoursToggle">Want VIP hours</label>
                                    <div className="toggle-switch">
                                        <input type="checkbox" id="vipHoursToggle" />
                                        <label htmlFor="vipHoursToggle"></label>
                                    </div>
                                </div>

                                <div className="form-group-custom">
                                    <textarea placeholder="Additional notes" rows="2" />
                                </div>

                                <button type="button" onClick={() => setprogress(2)} className="enroll-button">
                                    Enroll
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                                        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    )}

                    {/* الخطوة الثالثة */}
                    {progress === 2 && (
                        <nav className="form1">
                            <h2 className="form-title">Confirmation</h2>
                            <p>تم التسجيل بنجاح</p>
                            <button type="button" className="enroll-button">
                                Enroll
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                                    <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </button>
                        </nav>
                    )}

                    <img src="/Image9999.png" alt="Student" />
                </div>
            </div>
        </div>
    );
}
