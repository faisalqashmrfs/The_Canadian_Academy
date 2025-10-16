// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const ICONS = {
    facebook: '/icons/mdi_facebook.svg',
    instagram: '/icons/basil_instagram-solid.svg',
    tiktok: '/icons/streamline-flex_tiktok-solid.svg',
    linkedin: '/icons/linkedin.svg',
    youtube: '/icons/youtube.svg',
    location: '/icons/tdesign_location-filled.svg',
    email: '/icons/dashicons_email.svg',
    whatsapp: '/icons/mingcute_whatsapp-fill.svg'
};

const Footer = () => {
    return (
        <footer className="app-footer">
            <Container>
                <Row className="gy-5">
                    {/* Column 1: Academy Info */}
                    <Col lg={5} md={12}>
                        <h5 className="academy-name">The Canadian Academy</h5>
                        <p className="footer-description">
                            At the Global Language Academy, we foster a passion for learning.
                            Our experienced instructors provide personalized lessons tailored to each student's needs.
                            Immerse yourself in diverse cultures while mastering new languages with us.
                            Join our vibrant community and unlock your potential.
                        </p>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col lg={{ span: 2, offset: 1 }} md={4} sm={6}>
                        <h6 className="footer-title">Quick Links</h6>
                        <ul className="list-unstyled footer-list quick-links-mobile-grid">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/courses" className="footer-link">Courses</Link></li>
                            <li><Link to="/admissions" className="footer-link">Admissions</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                        </ul>
                    </Col>

                    {/* Column 3: Contact Info (Visible only on large screens) */}
                    <Col lg={3} md={4} sm={6} className="contact-column">
                        <h6 className="footer-title contact-title">Contact</h6>
                        <ul className="list-unstyled footer-list contact-list">
                            <li>
                                <img src={ICONS.location} alt="Location" className="contact-icon" />
                                <span>Tripureshwor</span>
                            </li>
                            <li>
                                <img src={ICONS.email} alt="Email" className="contact-icon" />
                                <span>academy@gmail.com</span>
                            </li>
                            <li>
                                <img src={ICONS.whatsapp} alt="WhatsApp" className="contact-icon" />
                                <span>+60-147580403</span>
                            </li>
                        </ul>
                    </Col>

                    {/* Column 4: Social Media */}
                    <Col lg={1} md={4} sm={12}>
                        <h6 className="footer-title">Join us on</h6>

                        {/* أيقونات فقط للشاشات الكبيرة */}
                        <div className="social-icons-wrapper">
                            <img src={ICONS.tiktok} alt="TikTok" className="social-icon" />
                            <img src={ICONS.instagram} alt="Instagram" className="social-icon" />
                            <img src={ICONS.facebook} alt="Facebook" className="social-icon" />
                        </div>

                        {/* أسماء فقط للشاشات الصغيرة */}
                        <ul className="list-unstyled footer-list social-links-mobile-list">
                            <li className="social-link">Facebook</li>
                            <li className="social-link">Instagram</li>
                            <li className="social-link">LinkedIn</li>
                            <li className="social-link">TikTok</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="footer-hr" />

                <Row>
                    <Col className="text-start copyright-mobile-center">
                        <small className="copyright-text">
                            © 2077 Untitled UI. All rights reserved.
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
