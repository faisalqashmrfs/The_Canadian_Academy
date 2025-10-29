import { Link } from 'react-router-dom'
import './RightCourse.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 

// 🚨 1. متغيرات العنوان والوصف (ظهور بسيط من الأسفل)
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// 🚨 2. متغيرات الحاوية (لتطبيق التتابع) - (تم إزالة 'hidden' هنا)
const containerVariants = {
    hidden: { opacity: 0 }, // 🚨 نبدأ الحاوية بشفافية صفر
    visible: {
        opacity: 1, // 🚨 ننهي الحاوية بشفافية كاملة
        transition: {
            staggerChildren: 0.15, // زيادة التأخير قليلاً
        },
    },
};

// 🚨 3. متغيرات البطاقة الواحدة (ظهور + دوران 3D خفيف) - (لا تحتاج إلى 'hidden' أو 'visible' هنا)
const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50, 
        rotateX: -15, 
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function RightCourse({ btn, englesh }) {
 return (
  <section className='RightCourse'>
            {/* تطبيق الحركة على العنوان */}
   {btn && (
                <motion.h2 
                    className='Title'
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Discover the Right Course for You
                </motion.h2>
            )}
            
            {/* تطبيق الحركة على الوصف */}
   {btn && (
                <motion.p 
                    className='Discription'
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }} 
                >
                    Each course is a doorway to new cultures, opportunities, and global connections. <span>Start your journey today.</span>
                </motion.p>
            )}

            {/* 🚨 التعديل: تطبيق variants و initial و whileInView على الحاوية الأب فقط */}
   <motion.div 
                className='CardsContainer'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} 
            >
    {englesh.map((card, index) => (
     <motion.div 
                        className="card" 
                        key={index}
                        variants={cardVariants} // يكفي تحديد الـ variants فقط، حيث يقوم الأب بتشغيلها
                    >
      <img src={`/${card.image}`} alt="" />
      <div className='bodyCard'>
       <div className='TitleCard'>
        <h3 className='subTitle'>{card.title}</h3>
       </div>
       <p className='discrip'>{card.description}</p>
       <div className='Buttonss'>
        <Link to={`/Inroll/${card.id}`}><button className='Inrorll'>Enroll Now</button></Link>
        <Link to={`/course-details/${(card.id)}`}><button className='SeeNow' style={{ backgroundColor: "black" }}>See More <img src="/arrow-right.svg" alt="" /></button></Link>
       </div>
      </div>
     </motion.div>
    ))}
   </motion.div>
            
            {/* تطبيق الحركة على زر "Explore More" */}
   <Link to="/Courses">
    {btn && (
                    <motion.button 
                        className='ExploreMoreCourses'
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }} 
                    >
                        {btn}
                    </motion.button>
                )}
   </Link>
  </section>
 )
}