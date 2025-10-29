import './UsDifferent.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // 🚨 استيراد Framer Motion

// 🚨 المتغيرات: حركة الظهور من الأسفل (Fade Up)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function UsDifferent() {
  return (
    <section className='UsDifferent'>
      {/* 🚨 تطبيق الحركة على card1 */}
      <motion.div
        className='card1'
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // تظهر عندما يكون 20% من العنصر مرئياً
      >
        <div className='Info'>
          <h2>What Makes Us Different</h2>
          <p>At the Canadian Institute, learning fits your lifestyle. With flexible schedules and expert instructors fluent in multiple languages, you’ll enjoy lessons designed around your goals and learning style. Explore diverse cultures, build real-world communication skills, and progress at your own pace — all within a supportive global community.</p>
        </div>
        <div className='Image'></div>
      </motion.div>

      {/* 🚨 تطبيق الحركة على card2 */}
      <motion.div
        className="card2"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // 🚨 إضافة تأخير بسيط (0.2 ثانية)
      >
        <img src="/Imagedate2.svg" alt="" />
        <p>Here we combine high-quality teaching with affordable programs designed for every learner. Our expert instructors create interactive classes that match your learning style, helping you gain real communication skills while exploring diverse cultures. Learn more - pay less and take your language skills to the next level.</p>
      </motion.div>
    </section>
  )
}