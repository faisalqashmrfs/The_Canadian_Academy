import { Link } from 'react-router-dom'
import './ContactHero.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from 'react';

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

const slideFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
};

export default function ContactHero({ title1, title11, title2, title3, span, p, buttom , height , sing}) {

        const [wechat , setwechat] = useState(false)
    const words = title1.split(" ");
    const words1 = title11.split(" ");

    return (
        <div className='Hero contactHeroc' style={{height : `${height ? "50vh" : "100vh"}`}}>
             <div className={wechat ? "wecchate" : "wecchateooff"}>
                <div>
                    <img src="/WechatQR.png" alt="" />
                    <button onClick={() => setwechat(false)}>cencel</button>
                </div> 
            </div>
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
                    {sing && <span className='span1'></span>}
                    {sing && <span className='span2'></span>}
                </h1>
                <h1>
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {words1.map((word, index) => (
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
                </h1>
                <div className='contacthhero'>
                    <h2>{title2}</h2>
                    <h2>{title3}</h2>
                </div>
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
            <motion.div
                            variants={slideFromLeft}
                            initial="hidden"
                            animate="visible"
                            className='Contact-FolowingBox'>
                            <div className='Icons'>
                                <span><Link target='_blank' to={"https://wa.me/601167503828"}><img src="/whatsapp.svg" alt="" /></Link></span>
                                <span><Link  onClick={() => setwechat(true)}><img src="/ic_baseline-wechat.svg" alt="" /></Link></span>
                                <span><Link target='_blank' to={"https://www.facebook.com/profile.php?id=61581033763168"}><img src="/mdi_facebook.svg" alt="" /></Link></span>
                                <span><Link target='_blank' to={"https://www.instagram.com/the.canadian.academy/"}><img src="/basil_instagram-solid.svg" alt="" /></Link></span>
                                <span><Link target='_blank' to={"https://www.tiktok.com/@the.canadian.academy"}><img src="/streamline-flex_tiktok-solid.svg" alt="" /></Link></span>
                            </div>
                            <p><h4>Chat With US</h4></p>
                        </motion.div>
        </div>
    )
}
