// src/Components/ContactForm/ContactForm.jsx

import React, { useRef } from 'react'; // 1. استيراد useRef
import emailjs from '@emailjs/browser'; // 2. استيراد مكتبة emailjs
import './ContactForm.css';

// لا يوجد تغيير هنا
const ContactDetail = ({ icon, text, color }) => (
    <div className="contact-detail">
        <i className={`bi bi-${icon} me-2 ${color}`}></i>
        <span>{text}</span>
    </div>
);

// ✅ المكون الذي تم تعديله
const ContactFormFields = () => {
    // 3. إنشاء مرجع (Ref) للنموذج
    const form = useRef();

    // 4. دالة إرسال البريد الإلكتروني
    const sendEmail = (e) => {
        e.preventDefault();

        // ⚠️ يجب تغيير هذه القيم إلى قيمك الخاصة من EmailJS
        const SERVICE_ID = 'YOUR_SERVICE_ID'; 
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
          })
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              alert('تم إرسال الرسالة بنجاح!');
              e.target.reset(); // تفريغ حقول النموذج بعد النجاح
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('عذراً، حدث خطأ في الإرسال. يرجى المحاولة لاحقاً.');
            },
          );
    };

    return (
        <div className="contact-form-wrapper p-4">
            <div className="mb-5">
                <h1 className="display-3 fw-bold custom-red-text">Let's Talk!</h1>
                <p className="lead text-secondary">Feel free to drop your message</p>
            </div>

            {/* 5. ربط دالة sendEmail و ref بالنموذج */}
            <form ref={form} onSubmit={sendEmail}>
                <div className="input-group mb-4 form-group-underline">
                    {/* 6. إضافة خاصية name لتطابق متغيرات قالب EmailJS */}
                    <input type="text" className="form-control form-input-no-border" placeholder="Full Name" aria-label="Full Name" name="user_name" required/>
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-person-fill"></i>
                    </span>
                </div>

                <div className="input-group mb-4 form-group-underline">
                    {/* 6. إضافة خاصية name */}
                    <input type="email" className="form-control form-input-no-border" placeholder="Email" aria-label="Email" name="user_email" required/>
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-envelope-fill"></i>
                    </span>
                </div>

                <div className="input-group mb-4 form-group-underline">
                    <div className="input-group-prepend d-flex align-items-center me-2">
                    </div>
                    {/* 6. إضافة خاصية name */}
                    <input type="tel" className="form-control form-input-no-border" placeholder="Phone" aria-label="Phone" name="user_phone" />
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-telephone-fill"></i>
                    </span>
                </div>

                <div className="input-group mb-4 form-group-underline">
                    {/* 6. إضافة خاصية name */}
                    <textarea rows="4" className="form-control form-input-no-border" placeholder="Message" aria-label="Message" name="message" required></textarea>
                    <span className="input-group-text custom-red-text bg-transparent align-self-start pt-3">
                        <i className="bi bi-chat-dots-fill"></i>
                    </span>
                </div>

                <button type="submit" className="btn btn-lg custom-red-bg px-4 mt-3 d-flex align-items-center text-white">
                    send <i className="bi bi-send-fill ms-2"></i>
                </button>
            </form>
        </div>
    );
};

// لا يوجد تغيير هنا
const ContactForm = () => {
    return (
        <div className="contact-form-wrapper py-5">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* ✅ النموذج */}
                    <div className="col-lg-6 col-md-12 p-4">
                        <ContactFormFields />
                    </div>

                    {/* ✅ الخريطة والمعلومات */}
                    <div className="col-lg-6 col-md-12 p-4">
                        <div className="map-container mb-5 border rounded-3">
                            <iframe
                                title="Tripureshwar Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.477930546637!2d85.31450607538393!3d27.69934397620759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f9d3b1f3f%3A0x7e5e8f2e8c3f6c7e!2sTripureshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1697031234567!5m2!1sen!2snp"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="row mt-3">
                            <div className="col-sm-6 col-12">
                                <ContactDetail icon="geo-alt-fill" text="Tripureshwar, Kathmandu" color="text-danger" />
                                <ContactDetail icon="facebook" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="instagram" text="academia@gmail.com" color="text-danger" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <ContactDetail icon="envelope-fill" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="telephone-fill" text="+60-147580403" color="text-danger" />
                                <ContactDetail icon="tiktok" text="academia@gmail.com" color="text-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;