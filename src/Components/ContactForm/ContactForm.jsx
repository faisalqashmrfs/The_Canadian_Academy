import './ContactForm.css';
import { useState, useRef } from 'react'; // 🚨 إضافة useState و useRef
import emailjs from 'emailjs-com'; // 🚨 استيراد مكتبة emailjs-com

// 🚨 بيانات التهيئة - يجب استبدالها ببيانات حسابك
const SERVICE_ID = 'service_p47p5x7'; // مثال: service_xxxxxxx
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // مثال: template_xxxxxxx
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // مثال: user_xxxxxxx

const ContactDetail = ({ icon, text }) => (
 <div className="contact-detail">
  <img src={icon} style={{marginRight:"8px"}}/>
  <span>{text}</span>
 </div>
);


const ContactFormFields = () => {
    // 🚨 1. استخدام useRef لربط النموذج بالـ DOM
    const form = useRef();

    // 🚨 2. استخدام useState لإدارة حالة الإرسال
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    // 🚨 3. دالة إرسال البريد الإلكتروني
    const sendEmail = (e) => {
        e.preventDefault(); // منع الإرسال الافتراضي

        setStatusMessage('');
        setIsSending(true);

        // استخدام sendForm مع المراجع (ref)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                // نجاح الإرسال
                console.log(result.text);
                setStatusMessage('Message sent successfully! Thank you for contacting us. 🎉');
                setIsSending(false);
                e.target.reset(); // تفريغ حقول النموذج بعد النجاح
            }, (error) => {
                // فشل الإرسال
                console.log(error.text);
                setStatusMessage(`Failed to send message: ${error.text}. Please try again. 😢`);
                setIsSending(false);
            });
    };

 return (
  <div className='liftFormSide'>
   <h1>Let’s Talk!</h1>

   <p>Feel free to drop your message</p>
            {/* 🚨 ربط دالة الإرسال بالنموذج وربط ref */}
   <form ref={form} onSubmit={sendEmail}>
    <div>
                    {/* 🚨 إضافة الخاصية name */}
     <input type="text" name="user_name" placeholder='Full Name' required />
     <img src="/frame1.svg" alt="profile" />
    </div>
    <div>
                    {/* 🚨 إضافة الخاصية name */}
     <input type="email" name="user_email" placeholder='Email' required />
     <img src="/sms.svg" alt="" />
    </div>
    <div>
                    {/* 🚨 إضافة الخاصية name */}
     <input type="text" name="user_phone" placeholder='Phone' />
     <img src="/call.svg" alt="" />
    </div>
    <div>
                    {/* 🚨 استخدام textarea للرسالة الطويلة، وإضافة الخاصية name */}
     <textarea name="message" placeholder='Message' required style={{ resize: 'vertical' }}></textarea>
     <img src="/message-text.svg" alt="" />
    </div>
    <div className='buttoncontactform'>
                    {/* 🚨 استخدام خاصية disabled أثناء الإرسال وعرض حالة الإرسال */}
     <button type="submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send'}
                    </button>

    </div>
                {/* 🚨 عرض رسالة الحالة */}
                {statusMessage && <p style={{ marginTop: '15px', fontWeight: 'bold', color: statusMessage.includes('successfully') ? 'green' : 'red' }}>{statusMessage}</p>}
   </form>
  </div>
 );
};

// لا يوجد تغيير هنا
const ContactForm = () => {
    // ... باقي الكود لم يتغير
    // (تم حذف باقي الـ ContactForm لتوفير المساحة وعدم تكرار الكود غير المُعدَّل)
 return (
  <div className="">
   <div className="">
    <div className="continerforform">
     <div className="">
      <ContactFormFields />
     </div>
     <div className="rightsideform">
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

                        <div className="row mt-3 forsrespons">
                            <div className="col-sm-6 col-6">
                                <ContactDetail icon="/locationRED.svg" text="Tripureshwar, Kathmandu" color="text-danger" />
                                <ContactDetail icon="/mdi_facebookred.svg" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="/basil_instagram-solidRED.svg" text="academia@gmail.com" color="text-danger" />
                            </div>
                            <div className="col-sm-6 col-6">
                                <ContactDetail icon="/sms.svg" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="/mingcute_whatsapp-fillRED.svg" text="+60-147580403" color="text-danger" />
                                <ContactDetail icon="/streamline-flex_tiktok-solidRED.svg" text="academia@gmail.com" color="text-danger" />
                            </div>
                        </div>
     </div>
    </div>
   </div>
  </div>
 );
};


export default ContactForm;