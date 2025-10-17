import  './InternationalAccreditations.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
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

export default function InternationalAccreditations() {

  const text = "Trusted International Accreditations";
  const words = text.split(" ");
  return (
    <section className='InternationalAccreditations'>
        <motion.h2
      className="title"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
        <p className='description'>The Canadian Academy is accredited by world-leading institutions, including <span>IELTS, Lingo</span>, and <span>HSK.</span> These certifications ensure our courses meet international standards — giving you qualifications that open doors worldwide.</p>
        <div className='Brands'>
        </div>
    </section>
  )
}
