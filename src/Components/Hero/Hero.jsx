import { Link } from 'react-router-dom'
import './Hero.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// ---------------------------
// 🚨 المتغيرات الحالية (للكلمات)
// ---------------------------
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// ---------------------------
// 🚨 المتغيرات الجديدة (للعناصر الأخرى)
// ---------------------------

// الحركة: الظهور من الأسفل
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// الحركة: الظهور من اليسار (لصندوق الأيقونات الجانبي)
const slideFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } }, // تأخير بسيط ليظهر بعد العنوان
};


export default function Hero({ title1, title2, span, p, buttom, height, sing, deatils, enroll, id, inrole }) {

    const words = title1.split(" ");

    return (
        <div className='Hero' style={{ height: `${height ? "50vh" : "100vh"}` }}>
            <div className='Title'>
                <h1>
                    {/* حركة الكلمات (كما هي) */}
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {words.map((word, index) => (
                            <motion.span
                                viewport={{ once: true, amount: 0.5 }}
                                key={index}
                                variants={itemVariants}
                                style={{ display: "inline-block", marginRight: "0.25em" }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                    {enroll && <div className='course-deatils'>
                        {
                            deatils?.map((item) => (
                                <span key={item.id}>
                                    {item.name}
                                </span>
                            ))
                        }
                    </div>}
                    {
                        enroll && <div className='inroll-deatils'>
                            <button><Link to={`/Inroll/${id}`}>Enroll Now</Link></button>
                        </div>
                    }
                    {sing && <span className='span1'></span>}
                    {sing && <span className='span2'></span>}
                </h1>

                {/* 🚨 تطبيق حركة fadeUp على h2 */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3 }} // تأخير لتظهر بعد العنوان
                >
                    {title2}
                </motion.h2>

                {/* 🚨 تطبيق حركة fadeUp على p */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5 }} // تأخير لتظهر بعد h2
                >
                    <span>{span}</span>{p}
                </motion.p>

                {buttom &&
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: 0.7 }} // 🚨 زيادة التأخير قليلاً
                        className='Buttons'>
                        <button><Link style={{ color: "#fff", textDecoration: "none" }} to={"/ContactUs"}>Contact Us</Link></button>
                        <button><Link style={{ color: "#D91E1E", textDecoration: "none" }} to={"/Courses"}>Explore Our Courses</Link></button>
                    </motion.div>
                }
            </div>

            {/* 🚨 تطبيق حركة slideFromLeft على صندوق التواصل */}
            {inrole && <motion.div
                variants={slideFromLeft}
                initial="hidden"
                animate="visible" // 🚨 استخدمنا animate بدلاً من whileInView لأنه من المحتمل أن يكون مرئياً دائماً
                className='Contact-FolowingBox'>
                <div className='Icons'>
                    <span><Link target='_blank' to={"https://wa.me/60147580403"}><img src="/whatsapp.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://wa.me/60147580403"}><img src="/ic_baseline-wechat.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://www.facebook.com/academia@gmail.com"}><img src="/mdi_facebook.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://www.instagram.com/academia@gmail.com"}><img src="/basil_instagram-solid.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://www.tiktok.com/academia@gmail.com"}><img src="/streamline-flex_tiktok-solid.svg" alt="" /></Link></span>
                </div>
                <p><h4>Chat With US</h4></p>
            </motion.div>}
        </div>
    )
}