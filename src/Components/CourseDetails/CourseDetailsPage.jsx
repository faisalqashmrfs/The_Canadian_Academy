import { useState } from 'react';
import './CourseDetailsPage.css';
import Hero from '../Hero/Hero';
import { Link, useParams } from 'react-router-dom';

const CourseDetailsPage = () => {

    const { id } = useParams();
    const AllCourses = [
        {
            id: 1,
            title: "English For Kids",
            deatils: [
                {
                    id: 1,
                    name: "Flexibility in timing",
                },
                {
                    id: 2,
                    name: "7–14 years",
                },
            ],
            overview: "At The Canadian Academy, we make learning English an exciting adventure for children aged 7-14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping young learners build strong communication skills and confidence. Every lesson is age-appropriate, engaging, and designed to spark a love for language.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Beginner to Advanced Tailored curriculum for each age group.",
            highlights: [
                { id: '01', title: "Native Teachers", description: "Learn from native educators, ensuring authentic language exposures and cultural insights." },
                { id: '02', title: "Focused Small Groups", description: "Benefit from a supportive environment where every student receives personalized guidance and care." },
                { id: '03', title: "Interactive Learning", description: "Engage in creative and enjoyable lessons that make learning both effective and exciting." },
                { id: '04', title: "Full Skill Focus", description: "Develop complete language skills through a balanced approach that strengthens all four key areas." },
                { id: '05', title: "Parental Feedback", description: "Stay updated with progress reports and constructive feedback to support your child's learning journey." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 2,
            title: "Academic English ",
            deatils: [
                {
                    id: 1,
                    name: "IELTS ",
                },
                {
                    id: 2,
                    name: "Lingua",
                },
                {
                    id: 3,
                    name: "PTE",
                },
            ],
            overview: "Looking to boost your confidence in meetings, presentations, and academic writing? At The Canadian Academy in Bukit Bintang, we help you communicate clearly, write professional theses and reports, and unlock international opportunities with IELTS, TOEFL, PTE, or Cambridge Exams.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "At The Canadian Academy, we provide a complete range of English courses tailored to every learner’s journey — from beginner to advanced. Each level is carefully structured to build strong foundations in vocabulary, grammar, and communication, while gradually developing academic and professional skills. Our expert instructors ensure that students progress with confidence, mastering listening, speaking, reading, and writing at every stage. Whether you are starting fresh or aiming for international exams, we deliver a professional and supportive learning experience that helps you achieve your goals.",
            highlights: [
                { id: '01', title: "Vocabulary & Grammar Essentials", description: "Strengthen your foundation in English by mastering key vocabulary and grammar rules for clear communication." },
                { id: '02', title: "Comprehensive Skills Practice", description: "Develop your listening, speaking, reading, and writing through interactive lessons and real-world exercises." },
                { id: '03', title: "IELTS Preparation & Strategies", description: "Boost your exam performance with authentic mock tests and proven strategies tailored to the IELTS format.h" },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 3,
            title: "Professional Business English",
            deatils: [
                {
                    id: 1,
                    name: "4-Skills ",
                },
                {
                    id: 2,
                    name: "Flexibility in timing",
                },
            ],
            overview: "Take your career to the next level with our Business English Success course — designed for working professionals who want to excel in today’s global workplace. Whether you need to speak with confidence in meetings and presentations, or write clear and professional emails and reports, this course equips you with the skills to succeed. ",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "At The Canadian Academy, we provide a complete range of English courses tailored to every learner’s journey — from beginner to advanced. Whether you are starting fresh or aiming for international exams, we deliver a professional and supportive learning experience that helps you achieve your goals.h",
            highlights: [
                { id: '01', title: "Confident Communication", description: "Master the language of meetings, presentations, and negotiations to speak with clarity and influence in any professional setting." },
                { id: '02', title: "Professional Writing Skills", description: "Learn how to write polished emails, reports, and business documents that leave a strong, professional impression." },
                { id: '03', title: "Global Career Advantage", description: "Gain the English skills and cultural awareness needed to expand your opportunities and succeed in international workplaces." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 4,
            title: "VIP English",
            deatils: [
                {
                    id: 1,
                    name: "flexible scheduling ",
                },
                {
                    id: 2,
                    name: "fully customize",
                },
            ],
            overview: "Unlock a premium language learning experience with our Elite English Program for VIPs at The Canadian Academy. Designed as a fully personalized, one-on-one course, VIP English adapts to your goals, pace, and interests — ensuring every session is meaningful and effective.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Perfect for professionals, students, and anyone who values efficiency and excellence in learning.",
            highlights: [
                { id: '01', title: "fully customized curriculum", description: "Strengthen your foundation in English by mastering key vocabulary and grammar rules for clear communication." },
                { id: '02', title: "results-driven path to fluency", description: "Develop your listening, speaking, reading, and writing through interactive lessons and real-world exercises." },
                { id: '03', title: "flexible scheduling", description: "Boost your exam performance with authentic mock tests and proven strategies tailored to the IELTS format." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 5,
            title: "English Summer/Winter Camp",
            deatils: [
                {
                    id: 1,
                    name: "Choose your Time ",
                },
            ],
            overview: "Are you ready for a camp of learning, laughter, and new friendships? The Canadian Academy’s Language Camp is the perfect opportunity for students to boost their English skills in a fun, immersive environment led by qualified native-speaking instructors.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "At The Canadian Academy, we provide a complete range of English courses tailored to every learner’s journey — from beginner to advanced. Each level is carefully structured to build strong foundations in vocabulary, grammar, and communication, while gradually developing  professional skills.",
            highlights: [
                { id: '01', title: "Engaging Classes", description: "Interactive lessons designed toimprove speaking, listening, reading, and writing." },
                { id: '02', title: "Cultural Activities", description: "Enjoy games, art, drama, and field trips that make learning exciting." },
                { id: '03', title: "Confidence Building", description: "Practice real-life English conversations in a supportive setting." },
                { id: '04', title: "International Atmosphere", description: "International Atmosphere" },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 6,
            title: "HSK ( Hanyu Shuiping Kaoshi )",
            deatils: [
                {
                    id: 1,
                    name: "All Levels",
                },
                {
                    id: 2,
                    name: "exam strategies",
                },
                {
                    id: 3,
                    name: "vocabulary",
                },
            ],
            overview: "HSK & HSKK Courses at The Canadian Academy The Canadian Academy proudly offers comprehensive HSK (Hanyu Shuiping Kaoshi) and HSKK (HSK Speaking Test) preparation courses for learners aiming to certify their Mandarin proficiency with China's official language exams.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Whether you're studying for academic, professional, or personal growth, our expert-led programs cover all levels—from beginner (HSK 1) to advanced (HSK 6)—along with dedicated speaking practice for the HSKK.",
            highlights: [
                { id: '01', title: "exam strategies", description: "Learn from native educators, ensuring authentic language exposure and cultural insights." },
                { id: '02', title: "vocabulary development", description: "Benefit from a supportive environment where every student receives personalized guidance and care." },
                { id: '03', title: "listening", description: "Engage in creative and enjoyable lessons that make learning both effective and exciting." },
                { id: '04', title: "reading", description: "Develop complete language skills through a balanced approach that strengthens all four key areas." },
                { id: '05', title: "writing", description: "Stay updated with  progress reports and constructive feedback to support your child’s learning journey." },
                { id: '06', title: "speaking", description: "Stay updated with  progress reports and constructive feedback to support your child’s learning journey." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 7,
            title: "YCT ( Youth Chinese Test )",
            deatils: [
                {
                    id: 1,
                    name: "Flexibility in timing",
                },

            ],
            overview: "The Canadian Academy is proud to offer the Youth Chinese Test (YCT) — an internationally recognized assessment designed to evaluate the Chinese language proficiency of young learners.Tailored for students in primary and secondary school, the YCT provides a structured and engaging way to measure progress in Mandarin across listening, reading, and speaking skills.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Whether you  are just beginning their Mandarin journey or advancing toward fluency, the YCT is a valuable milestone backed by global standards.",
            highlights: [
                { id: '01', title: "targeted lessons", description: "Strengthen your foundation in Mandarin by mastering key vocabulary and grammar rules for clear communication." },
                { id: '02', title: "interactive activities", description: "Develop your listening, speaking, reading, and writing through interactive lessons and real-world exercises." },
                { id: '03', title: "practice exams", description: "Boost your exam performance with authentic mock tests and proven strategies tailored to the IELTS format." },
                { id: '04', title: "ensuring confidence and success on test", description: "Boost your exam performance with authentic mock tests and proven strategies tailored to the YCT format." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 8,
            title: "BCT ( Business Chinese Test )",
            deatils: [
                {
                    id: 1,
                    name: "4-Skills",
                },
                {
                    id: 2,
                    name: "Flexibility in timing",
                },
            ],
            overview: "The Canadian Academy offers a specialized Business Chinese Test (BCT) preparation course designed for professionals looking to enhance their Mandarin skills in a business context.Our expert instructors provide targeted training, practical vocabulary, and cultural insights to help learners succeed in both the BCT A and B levels. Whether you're aiming to advance your career, engage in international trade, or work in Chinese-speaking markets, our BCT course equips you with the language tools and confidence needed to thrive in today’s global business environment.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Perfect for professionals, students, and anyone who values efficiency and excellence in learning.",
            highlights: [
                { id: '01', title: "communication", description: "Strengthen your foundation in Mandarin by mastering key vocabulary and grammar rules for clear communication." },
                { id: '02', title: "negotiation", description: "Develop your listening, speaking, reading, and writing through interactive lessons and real-world exercises." },
                { id: '03', title: "presentations", description: "Boost your Presentations performance with authentic mock tests and proven strategies." },
                { id: '04', title: "formal writing", description: "Boost your Email and Report  Writing with authentic mock tests." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 9,
            title: "VIP Mandarin ",
            deatils: [
                {
                    id: 1,
                    name: "flexible scheduling",
                },
                {
                    id: 2,
                    name: "fully customize",
                },
            ],
            overview: "Experience the ultimate in language learning with VIP Mandarin at The Canadian Academy – a premium one-on-one course tailored specifically to your goals, pace, and interests. Whether you're aiming to improve business communication, prepare for exams, or build everyday conversation skills, our expert instructors design each session around your individual needs.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Perfect for professionals, students, and anyone who values efficiency and excellence in learning.",
            highlights: [
                { id: '01', title: "fully customized curriculum", description: "Every lesson is tailored to your goals, interests, and learning style for maximum impact." },
                { id: '02', title: "results-driven path to fluency", description: "Achieve measurable progress with a focused approach designed to deliver real outcomes." },
                { id: '03', title: "flexible scheduling", description: "Learn at your convenience with sessions that fit seamlessly into your busy lifestyle." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
        {
            id: 10,
            title: "Mandarin Summer/Winter Camp",
            deatils: [
                {
                    id: 1,
                    name: "Flexibility in timing",
                },
            ],
            overview: "Are you ready for a Camp of learning, laughter, and new friendships? The Canadian Academy’s Language Camp is the perfect opportunity for students to boost their Mandarin skills in a fun, immersive environment led by qualified native-speaking instructors.",
            prerequisites: "No prior knowledge is required to successfully participate in the course.",
            levelsOffered: "Beginner to Advanced Tailored curriculum for each age group.",
            highlights: [
                { id: '01', title: "Engaging Classes", description: "Interactive lessons designed toimprove speaking, listening, reading, and writing." },
                { id: '02', title: "Cultural Activities", description: "Enjoy games, art, drama, and field trips that make learning exciting." },
                { id: '03', title: "Confidence Building", description: "Practice real-life Mandarin conversations in a supportive setting." },
                { id: '04', title: "International Atmosphere", description: "Make new friends from around the world." },
            ],
            educator: {
                name: "Mr. Li Wei",
                bio: "Mr. Li Wei is a Mandarin teacher from Beijing, China. With over 8 years of teaching experience, he combines authentic cultural knowledge with interactive methods, making learning engaging and effective for all students.",
                image: "/images/Avatar.png",
            }
        },
    ]
    const MOCK_COURSE_DATA = AllCourses.filter(item => item.id == id);
    const data = MOCK_COURSE_DATA[0];
    const [activ, setactiv] = useState(1);

    console.log(data);

    return (
        <>
            <Hero title1={data.title} deatils={data.deatils} enroll={true} id={id} inrole={true} />
            <section className='Detalseofall'>
                <h1>Course Details </h1>
                <div className='containerForDitells'>
                    <div className='controller'>
                        <Link className={activ == 1 ? 'active' : ''} onClick={() => setactiv(1)}>Course Overview</Link>
                        <Link className={activ == 2 ? 'active' : ''} onClick={() => setactiv(2)}>Prerequisites</Link>
                        <Link className={activ == 3 ? 'active' : ''} onClick={() => setactiv(3)}>Program Highlights</Link>
                        <Link className={activ == 4 ? 'active' : ''} onClick={() => setactiv(4)}>Levels Offered</Link>
                        <Link className={activ == 5 ? 'active' : ''} onClick={() => setactiv(5)}>Meet Our Educator</Link>
                        <button>Enroll Now</button>
                    </div>
                    <div className='parts'>
                        <div className='part'>
                            <h2>Course Overview</h2>
                            <p>{data.overview}</p>
                        </div>
                        <div className='part'>
                            <h2>Prerequisites</h2>
                            <p>{data.prerequisites}</p>
                        </div>
                        <div className='part'>
                            <h2>Program Highlights</h2>
                            <div className='fatherspiction'>
                                {
                                    data.highlights.map((item, index) => (
                                        <div className='spiction' key={index}>
                                            <span>0{(index + 1)}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='part'>
                            <h2>Levels Offered</h2>
                            <p>{data.levelsOffered}</p>
                        </div>
                        <div className='part Educatorp'>
                            <h2>Meet Our Educator</h2>
                            <div className='fatherEducator'>
                                <div className='Educator'>
                                    <img src="/images/Avatar.png" alt="" />
                                    <span>{data.educator.name}</span>
                                </div>
                                <p>{data.educator.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseDetailsPage;
