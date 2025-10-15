// src/Components/ContactForm/ContactForm.jsx

import React from 'react';
import './ContactForm.css';

const ContactDetail = ({ icon, text, color }) => (
    <div className="contact-detail">
        <i className={`bi bi-${icon} me-2 ${color}`}></i>
        <span>{text}</span>
    </div>
);

const ContactFormFields = () => {
    return (
        <div className="contact-form-wrapper p-4">
            <div className="mb-5">
                <h1 className="display-3 fw-bold custom-red-text">Let's Talk!</h1>
                <p className="lead text-secondary">Feel free to drop your message</p>
            </div>

            <form>
                <div className="input-group mb-4 form-group-underline">
                    <input type="text" className="form-control form-input-no-border" placeholder="Full Name" aria-label="Full Name" />
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-person-fill"></i>
                    </span>
                </div>

                <div className="input-group mb-4 form-group-underline">
                    <input type="email" className="form-control form-input-no-border" placeholder="Email" aria-label="Email" />
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-envelope-fill"></i>
                    </span>
                </div>

                <div className="input-group mb-4 form-group-underline">
                    <div className="input-group-prepend d-flex align-items-center me-2">
                        <span className="text-secondary me-1"><i className="bi bi-globe"></i></span>
                        <span className="text-secondary me-1">Country</span>
                        <span className="custom-red-text"><i className="bi bi-caret-down-fill"></i></span>
                    </div>
                    <input type="tel" className="form-control form-input-no-border" placeholder="Phone" aria-label="Phone" />
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-telephone-fill"></i>
                    </span>
                </div>

                <div className="input-group mb-4 form-group-underline">
                    <input type="text" className="form-control form-input-no-border" placeholder="Message" aria-label="Message" />
                    <span className="input-group-text custom-red-text bg-transparent">
                        <i className="bi bi-chat-dots-fill"></i>
                    </span>
                </div>

                <button type="submit" className="btn btn-lg custom-red-bg px-4 mt-3 d-flex align-items-center text-white">
                    send <i className="bi bi-send-fill ms-2"></i>
                </button>
            </form>
        </div>
    );
};

const ContactForm = () => {
    return (
        <div className="contact-form-wrapper py-5">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* ✅ النموذج */}
                    <div className="col-lg-6 col-md-12 p-4">
                        <ContactFormFields />
                    </div>

                    {/* ✅ الخريطة والمعلومات */}
                    <div className="col-lg-6 col-md-12 p-4">
                        <div className="map-container mb-5 border rounded-3">
                            <iframe
                                title="Tripureshwar Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.477930546637!2d85.31450607538393!3d27.69934397620759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f9d3b1f3f%3A0x7e5e8f2e8c3f6c7e!2sTripureshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1697031234567!5m2!1sen!2snp"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="row mt-3">
                            <div className="col-sm-6 col-12">
                                <ContactDetail icon="geo-alt-fill" text="Tripureshwar, Kathmandu" color="text-danger" />
                                <ContactDetail icon="facebook" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="instagram" text="academia@gmail.com" color="text-danger" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <ContactDetail icon="envelope-fill" text="academia@gmail.com" color="text-danger" />
                                <ContactDetail icon="telephone-fill" text="+60-147580403" color="text-danger" />
                                <ContactDetail icon="tiktok" text="academia@gmail.com" color="text-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
