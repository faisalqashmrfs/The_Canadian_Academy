import './ContactForm.css';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion"; // 🚨 استيراد Framer Motion

// 🚨 بيانات التهيئة (كما هي)
const SERVICE_ID = 'service_p47p5x7';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// ---------------------------
// 🚨 1. متغيرات الحركة
// ---------------------------

// حركة الظهور من اليسار (للنموذج نفسه)
const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// حركة الظهور من اليمين (للمعلومات الجانبية)
const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }, // تأخير بسيط
};

// متغيرات التتابع لحقول النموذج
const formContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1, // تظهر الحقول بتتابع 
        },
    },
};

// متغيرات حقل الإدخال الواحد
const inputItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

// ---------------------------
// 🚨 مكون ContactDetail (تعديل بسيط لتطبيق الحركة)
// ---------------------------
const ContactDetail = ({ icon, text }) => (
    // تطبيق حركة بسيطة لكل تفصيل (يجب أن يتم تكرارها داخل قائمة)
    <motion.div
        className="contact-detail"
        variants={inputItemVariants} // نستخدم نفس حركة الحقول البسيطة
    >
        <img src={icon} style={{ marginRight: "8px" }} />
        <span>{text}</span>
    </motion.div>
);


const ContactFormFields = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatusMessage('');
        setIsSending(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatusMessage('Message sent successfully! Thank you for contacting us. 🎉');
                setIsSending(false);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatusMessage(`Failed to send message: ${error.text}. Please try again. 😢`);
                setIsSending(false);
            });
    };

    return (
        // 🚨 تغليف القسم الأيسر بالحركة
        <motion.div
            className='liftFormSide'
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <h1>Let’s Talk!</h1>

            <p>Feel free to drop your message</p>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                variants={formContainerVariants}
                initial="hidden"
                animate="visible" // نستخدم 'animate' لأنه يتم تشغيله بواسطة 'whileInView' للعنصر الأب 
            >
                {/* 🚨 تطبيق حركة الابن على كل حقل */}
                <div>
                    <motion.input type="text" name="user_name" placeholder='Full Name' required variants={inputItemVariants} />
                    <img src="/frame1.svg" alt="profile" />
                </div>
                <div>
                    <motion.input type="email" name="user_email" placeholder='Email' required variants={inputItemVariants} />
                    <img src="/sms.svg" alt="" />
                </div>
                <div>
                    <motion.input type="text" name="user_phone" placeholder='Phone' variants={inputItemVariants} />
                    <img src="/call.svg" alt="" />
                </div>
                <div>
                    <motion.textarea name="message" placeholder='Message' required style={{ resize: 'vertical' }} variants={inputItemVariants}></motion.textarea>
                    <img src="/message-text.svg" alt="" />
                </div>
                <div className='buttoncontactform'>
                    <motion.button type="submit" disabled={isSending} variants={inputItemVariants}>
                        {isSending ? 'Sending...' : 'Send'}
                    </motion.button>

                </div>
                {statusMessage && <p style={{ marginTop: '15px', fontWeight: 'bold', color: statusMessage.includes('successfully') ? 'green' : 'red' }}>{statusMessage}</p>}
            </motion.form>
        </motion.div>
    );
};

// ---------------------------
// 🚨 مكون ContactForm (لتغليف القسم الأيمن)
// ---------------------------
const ContactForm = () => {
    return (
        <div className="">
            <div className="">
                <div className="continerforform">
                    <div className="">
                        <ContactFormFields />
                    </div>
                    {/* 🚨 تغليف القسم الأيمن بالحركة */}
                    <motion.div
                        className="rightsideform"
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
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

                        <motion.div
                            className="row mt-3 forsrespons"
                            variants={formContainerVariants} // نستخدم التتابع لعرض التفاصيل
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
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
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};


export default ContactForm;