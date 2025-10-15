import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // إذا حابة تضيفي تنسيقات إضافية

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 px-3 mt-5">
            <div className="container">
                <div className="row gy-4 mb-4">
                    {/* العمود الأول */}
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-danger fw-bold mb-3">The Canadian Academy</h5>
                        <p className="small text-light">
                            At the Global Language Academy, we foster a passion for learning.
                            Our experienced instructors provide personalized lessons tailored to each student’s needs.
                            Immerse yourself in rich diverse cultures while mastering new languages with us.
                            Join our vibrant community and unlock your potential.
                        </p>
                    </div>

                    {/* العمود الثاني */}
                    <div className="col-md-6 col-lg-3">
                        <h6 className="fw-semibold mb-3">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/" className="text-light text-decoration-none hover-link">Home</a></li>
                            <li><a href="/about" className="text-light text-decoration-none hover-link">About Us</a></li>
                            <li><a href="/courses" className="text-light text-decoration-none hover-link">Courses</a></li>
                            <li><a href="/help" className="text-light text-decoration-none hover-link">Help Center</a></li>
                            <li><a href="/contact" className="text-light text-decoration-none hover-link">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* العمود الثالث */}
                    <div className="col-md-6 col-lg-3">
                        <h6 className="fw-semibold mb-3">Contact</h6>
                        <ul className="list-unstyled small text-light">
                            <li>Skype: <span className="text-muted">live:skypeuser</span></li>
                            <li>Email: <span className="text-muted">academy@gmail.com</span></li>
                            <li>Phone: <span className="text-muted">+91-874-456-8345</span></li>
                        </ul>
                    </div>

                    {/* العمود الرابع */}
                    <div className="col-md-6 col-lg-3">
                        <h6 className="fw-semibold mb-3">Join us on</h6>
                        <div className="d-flex gap-3 fs-5 text-danger">
                            <a href="#" className="text-danger"><FaFacebookF /></a>
                            <a href="#" className="text-danger"><FaTwitter /></a>
                            <a href="#" className="text-danger"><FaInstagram /></a>
                            <a href="#" className="text-danger"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                {/* الحقوق */}
                <div className="text-center border-top border-secondary pt-3">
                    <small className="text-muted">© 2077 Canadian Academy. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}
