// src/components/CourseDetails/CourseDetailsPage.jsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// استيراد المكونات الفرعية
import CourseSidebar from './CourseSidebar';
import CourseSection from './CourseSection';
import ProgramHighlights from './ProgramHighlights';
import MeetEducator from './MeetEducator';

// بيانات الدورة الوهمية
const MOCK_COURSE_DATA = {
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
        image: "/images/Avatar.png", //  صورة من مجلد public
    }
};

const CourseDetailsPage = () => {
    const data = MOCK_COURSE_DATA;

    const [isEnrolled, setIsEnrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    const handleEnroll = () => {
        setIsEnrolled(true);
        alert("تهانينا! تم تسجيلك في الدورة.");
    };

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    // Scroll Spy: تحديث القسم النشط عند التمرير
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'prerequisites', 'highlights', 'levels-offered', 'meet-educator'];
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container className="my-5">
            <h1 className="text-danger fw-bold mb-5" style={{ fontSize: '3rem' }}>Course Details</h1>

            <Row>
                <Col md={3} className="pe-4">
                    <CourseSidebar
                        isEnrolled={isEnrolled}
                        onEnrollClick={handleEnroll}
                        activeSection={activeSection}
                        onNavClick={handleNavClick}
                    />
                </Col>

                <Col md={9}>
                    <div id="overview">
                        <CourseSection
                            title="Course Overview"
                            content={data.overview}
                        />
                    </div>

                    <div id="prerequisites">
                        <CourseSection
                            title="Prerequisites"
                            content={data.prerequisites}
                        />
                    </div>

                    <div id="highlights">
                        <ProgramHighlights highlights={data.highlights} />
                    </div>

                    <div id="levels-offered">
                        <CourseSection
                            title="Levels Offered"
                            content={data.levelsOffered}
                        />
                    </div>

                    <div id="meet-educator">
                        <MeetEducator educator={data.educator} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetailsPage;
