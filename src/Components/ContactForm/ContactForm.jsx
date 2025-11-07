import './ContactForm.css';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 
import { Link } from 'react-router-dom';

const SERVICE_ID = 'service_me6tc4q';
const TEMPLATE_ID = 'template_r0p8edm';
const PUBLIC_KEY = 'jS_MzaP75bFS9HTFa';

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }, 
};

const formContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1, 
        },
    },
};

const inputItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

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
                {statusMessage && <p style={{ marginTop: '15px' , fontSize: "16px" , fontWeight: 'bold', color: statusMessage.includes('successfully') ? 'green' : 'red' }}>{statusMessage}</p>}
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8003026098913!2d101.7117117!3d3.1473309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37b69ac5e207%3A0xd89ec08f21a83795!2sThe%20Canadian%20Academy%20(TCA)!5e0!3m2!1sar!2sus!4v1762445194363!5m2!1sar!2sus"
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
                                <ContactDetail icon="/locationRED.svg" text="Bukit Bintang, Kuala Lumpur" color="text-danger" />
                                <ContactDetail icon="/mdi_facebookred.svg" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="/basil_instagram-solidRED.svg" text="academia@gmail.com" color="text-danger" />
                            </div>
                            <div className="col-sm-6 col-6">
                                <ContactDetail icon="/sms.svg" text="Info@thecanadianacademy.edu.my" color="text-danger" />
                                <Link><ContactDetail icon="/mingcute_whatsapp-fillRED.svg" text="+60-147580403" color="text-danger" /></Link>
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