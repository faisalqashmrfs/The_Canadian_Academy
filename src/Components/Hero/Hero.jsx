import { Link } from 'react-router-dom'
import './Hero.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

export default function Hero({ title1, title2, span, p, buttom , height , sing , deatils , enroll , id , inrole}) {
    
    const words = title1.split(" ");

    return (
        <div className='Hero' style={{height : `${height ? "50vh" : "100vh"}`}}>
            <div className='Title'>
                <h1>
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
                    {enroll &&<div className='course-deatils'>
                        {
                            deatils?.map((item) => (
                                <span key={item.id}>
                                    {item.name}
                                </span>
                            ))
                        }
                    </div>}
                    {
                        enroll && <div  className='inroll-deatils'>
                        <button><Link to={`/Inroll/${id}`}>Enroll Now</Link></button>
                    </div>
                    }
                    {sing && <span className='span1'></span>}
                    {sing && <span className='span2'></span>}
                </h1>
                <h2>{title2}</h2>
                <p><span>{span}</span>{p}</p>
                {buttom &&
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4 }}
                        className='Buttons'>
                        <button><Link style={{ color: "#fff", textDecoration: "none" }} to={"/ContactUs"}>Contact Us</Link></button>
                        <button><Link style={{ color: "#D91E1E", textDecoration: "none" }} to={"/Courses"}>Explore Our Courses</Link></button>
                    </motion.div>
                }
            </div>
            {inrole && <div className='Contact-FolowingBox'>
                <div className='Icons'>
                    <span><Link target='_blank' to={"https://wa.me/60147580403"}><img src="/whatsapp.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://wa.me/60147580403"}><img src="/ic_baseline-wechat.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://www.facebook.com/academia@gmail.com"}><img src="/mdi_facebook.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://www.instagram.com/academia@gmail.com"}><img src="/basil_instagram-solid.svg" alt="" /></Link></span>
                    <span><Link target='_blank' to={"https://www.tiktok.com/academia@gmail.com"}><img src="/streamline-flex_tiktok-solid.svg" alt="" /></Link></span>
                </div>
                <p><h4>Chat With US</h4></p>
            </div>}
        </div>
    )
}
