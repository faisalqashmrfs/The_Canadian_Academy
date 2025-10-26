import './Inroll.css';
import Hero from '../../Components/Hero/Hero';
import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getNames } from 'country-list';
// استيراد مكتبة Axios
import axios from 'axios';

// مصفوفات الدورات
const englesh = [
    { id: 1, title: "English For Kids", description: "...", span1: "Flexibility in timing", span2: "7 14 years", image: "Imagec1.png", },
    { id: 2, title: "Academic English", description: "...", span1: "IELTS", span2: "PTEh", image: "Imagec2.png", },
    { id: 3, title: "Professional Business English", description: "...", span1: "Flexibility in timing", span2: "4-Skills", image: "Imagec3.png", },
    { id: 4, title: "VIP English Course", description: "...", span1: "Choose your hours", span2: "One to One Teaching", image: "Courses.png", },
    { id: 5, title: "Summer/Winter Camp", description: "...", span1: "Flexibility in timing", span2: "Choose your Time", image: "Imagec5.png", },
];
const mandarin = [
    { id: 6, title: "HSK ( Hanyu Shuiping Kaoshi )", description: "...", span1: "Flexibility in timing", span2: "7 14 years", image: "Image(6).png", },
    { id: 7, title: "YCT ( Youth Chinese Test )", description: "...", span1: "IELTS - Lingua", span2: "PTE", image: "Image(7).png", },
    { id: 8, title: "Professional Business English", description: "...", span1: "Flexibility in timing", span2: "4-Skills", image: "Image(8).png", },
    { id: 9, title: "VIP English Course", description: "...", span1: "Choose your hours", span2: "One to One Teaching", image: "Courses.png", },
    { id: 10, title: "Summer/Winter Camp", description: "...", span1: "Choose your Time", image: "Image(10).png", },
];

// دمج مصفوفات الدورات في مصفوفة واحدة
const allCourses = [...englesh, ...mandarin];

// الرابط الثابت للـ API
const API_URL = 'https://api.thecanadianacademy.edu.my/api/notifications'; 

export default function Inroll() {
    const [progress, setprogress] = useState(0);

    // 1. استخراج الـ id وتحويله إلى رقم
    const { id } = useParams();
    const courseId = parseInt(id, 10); 

    // --- حالات الخطوة الأولى (معلومات شخصية) ---
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    
    // --- حالات القوائم المنسدلة ---
    const [selectedCountry, setSelectedCountry] = useState('');
    const [enrollPeriod, setEnrollPeriod] = useState(''); // per

    // --- حالات اللغة والنوع ---
    const getDefaultLanguage = () => (courseId < 6 ? "English" : "Mandarin");
    const [selectedLanguage, setSelectedLanguage] = useState(getDefaultLanguage);
    
    const getDefaultType = () => {
        const matchingCourse = allCourses.find(course => course.id === courseId);
        return matchingCourse ? matchingCourse.title : "";
    };
    const [selectedType, setSelectedType] = useState(getDefaultType);

    // --- حالات VIP ---
    const [wantsVipHours, setWantsVipHours] = useState(false);
    const [vipHoursCount, setVipHoursCount] = useState(''); // hours
    const [isSubmitting, setIsSubmitting] = useState(false); // حالة الإرسال

    // دالة للتحقق من بيانات الخطوة الأولى
    const handleNextStep1 = () => {
        if (!firstName || !lastName || !selectedCountry || !mobile || !email) {
            alert("Please fill in all personal information fields.");
            return;
        }
        setprogress(1);
    };

    // دالة لتأكيد وإرسال البيانات (في الخطوة الثانية)
    const handleEnrollSubmission = async (e) => {
        e.preventDefault();

        // التحقق من الحقول الأساسية في الخطوة 2
        if (!selectedLanguage || !selectedType || !enrollPeriod) {
            alert("Please complete all course fields.");
            return;
        }
        
        // التحقق من حقل VIP إذا كان مفعّلاً
        if (wantsVipHours && !vipHoursCount) {
             alert("Please specify the number of VIP hours.");
             return;
        }

        // 🚨 مرحلة التأكيد (البوب اب)
        const isConfirmed = window.confirm("Are you sure you want to submit your enrollment request?");

        if (!isConfirmed) {
            return; // إلغاء الإرسال
        }

        setIsSubmitting(true);

        const payload = {
            name: `${firstName} ${lastName}`, // دمج الاسم الأول والأخير
            mobile: mobile,
            email: email,
            nation: selectedCountry,
            lang: selectedLanguage,
            // استخلاص الرقم من قيمة الـ select
            per: enrollPeriod.replace(/[^0-9]/g, ''), 
            hours: wantsVipHours ? parseInt(vipHoursCount, 10) : 0, 
            message: "sdsdsdsd",
        };

        try {
            // تنفيذ طلب الـ API باستخدام **Axios**
            const response = await axios.post(API_URL, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Axios يستخدم response.status بدلاً من response.ok
            if (response.status >= 200 && response.status < 300) {
                // نجاح الإرسال (حالة 2xx)
                setprogress(2);
                alert("Enrollment submitted successfully!");
            } else {
                // فشل الإرسال (للحالات التي قد تكون ضمن نطاق Axios)
                // في الواقع، Axios يطلق خطأ للحالات 4xx/5xx، لكن هذا كاحتياط
                alert(`Submission failed. Status: ${response.status}. Please check your inputs.`);
            }
        } catch (error) {
            // خطأ في الشبكة أو خطأ حالة (4xx أو 5xx)
            console.error('Network or server error:', error.response ? error.response.data : error.message);
            // عرض رسالة خطأ أكثر دقة إذا كان هناك استجابة من السيرفر
            const errorMessage = error.response 
                ? `Submission failed. Status: ${error.response.status}.` 
                : "A network error occurred. Please try again.";
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };


    // دالة تغيير VIP
    const handleVipToggle = (e) => {
        const isChecked = e.target.checked;
        setWantsVipHours(isChecked);
        if (!isChecked) {
            setVipHoursCount(''); // مسح القيمة عند الإلغاء
        }
    };


    const countryNames = useMemo(() => {
        return getNames('en'); 
    }, []);

    // **ملاحظة**: تم استرجاع الـ CSS الذي تم حذفه سابقاً لضمان عدم وجود مشاكل في التنسيق الأساسي 
    // إذا كنت تفضل وضعه في ملف منفصل (Inroll.css)، يمكنك حذف هذا الـ useEffect.
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
     
     /* نمط حقل ساعات VIP */
     .form-group-custom.vip-hours-input input {
          margin-top: 10px;
          border-bottom: 2px solid #dc3545;
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
            <Hero title1="" title2="Enroll Now" height={true} sing={false} />
            <div className="inrollWindows">
                {/* شريط التقدم */}
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
                    {/* الخطوة الأولى: المعلومات الشخصية */}
                    {progress === 0 && (
                        <nav className="form1">
                            <h2 className="form-title">Personal Information</h2>
                            <div>
                                {/* ربط الحقول بالحالات */}
                                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </div>
                            <select
                                id="country-select"
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                required
                            >
                                <option value="">Country</option>
                                {countryNames.map((countryName) => (
                                    <option key={countryName} value={countryName}>
                                        {countryName}
                                    </option>
                                ))}
                            </select>
                            {/* ربط الحقول بالحالات */}
                            <input type="text" placeholder="Phone" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            
                            {/* زر الانتقال مع التحقق */}
                            <button onClick={handleNextStep1} className="enroll-button">
                                Continue
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                                    <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </button>
                        </nav>
                    )}

                    {/* الخطوة الثانية: معلومات الدورة (نموذج الإرسال) */}
                    {progress === 1 && (
                        <div className="form1">
                            <h2 className="form-title">Course Information</h2>
                            {/* ربط النموذج بدالة الإرسال */}
                            <form onSubmit={handleEnrollSubmission}>
                                {/* قائمة اللغة */}
                                <div className="form-group-custom">
                                    <select 
                                        required 
                                        value={selectedLanguage} 
                                        onChange={(e) => setSelectedLanguage(e.target.value)}
                                    >
                                        <option value="" disabled hidden>Choose the Language</option>
                                        <option value="English">English</option>
                                        <option value="Mandarin">Mandarin</option>
                                    </select>
                                </div>

                                {/* قائمة نوع الدورة (الـ Type) */}
                                <div className="form-group-custom">
                                    <select 
                                        required 
                                        value={selectedType} 
                                        onChange={(e) => setSelectedType(e.target.value)} 
                                    >
                                        <option value="" disabled hidden>Choose the Course Type</option>
                                        {allCourses.map((course) => (
                                            <option key={course.id} value={course.title}>
                                                {course.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* فترة التسجيل (per) */}
                                <div className="form-group-custom">
                                    <select 
                                        required 
                                        value={enrollPeriod} 
                                        onChange={(e) => setEnrollPeriod(e.target.value)}
                                    >
                                        <option value="" disabled hidden>Enroll Period (Months)</option>
                                        <option value="1M">1 Month</option>
                                        <option value="3M">3 Months</option>
                                        <option value="6M">6 Months</option>
                                    </select>
                                </div>

                                <h3 className="form-subtitle">Other Preference</h3>

                                {/* مفتاح تبديل VIP */}
                                <div className="toggle-group">
                                    <label htmlFor="vipHoursToggle">Want VIP hours</label>
                                    <div className="toggle-switch">
                                        <input 
                                            type="checkbox" 
                                            id="vipHoursToggle" 
                                            checked={wantsVipHours}
                                            onChange={handleVipToggle}
                                        />
                                        <label htmlFor="vipHoursToggle"></label>
                                    </div>
                                </div>
                                
                                {/* حقل إدخال ساعات VIP - تم إزالة الـ inline style هنا */}
                                {wantsVipHours && (
                                    <div className="form-group-custom vip-hours-input">
                                        <input
                                            type="number"
                                            placeholder="Enter number of VIP hours"
                                            value={vipHoursCount}
                                            onChange={(e) => setVipHoursCount(e.target.value)}
                                            required={wantsVipHours}
                                            min="1" 
                                        />
                                    </div>
                                )}

                                {/* زر الإرسال */}
                                <button type="submit" className="enroll-button" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Enroll'}
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor">
                                        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    )}

                    {/* الخطوة الثالثة: التأكيد */}
                    {progress === 2 && (
                        <nav className="form1">
                            <h2 className="form-title">Confirmation</h2>
                            <p>تم إرسال طلبك بنجاح. سيتم التواصل معك قريباً.</p>
                            <button type="button" className="enroll-button">
                                Go to Home
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