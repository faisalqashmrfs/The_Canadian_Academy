import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Inroll.css';
import Footer from '../../Components/Footer/Footer';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

export default function EnrollSummary() {
    const location = useLocation();
    const enrollmentData = location.state || {};
    const navigate = useNavigate();

    return (
        <div className="enroll-page">
            <header className="enroll-header"></header>

            <section className="progress-section container my-4">
                <ProgressBar currentStep={4} />
            </section>

            <section className="enroll-confirmation-section container my-5">
                <div className="row gy-4">
                    {/* ✅ Left side: Confirmation + Details */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-start">
                        <div className="confirmation-box-wrapper w-100">
                            <div className="confirmation-box-content">
                                <h1 className="confirmation-title">
                                    Your Course Enrollment <span className="is-confirmed">is Confirmed!</span>
                                </h1>
                                <p className="confirmation-message">
                                    You've successfully reserved your spot in <strong>{enrollmentData.language} Course</strong>.
                                    A confirmation email has been sent to your inbox.
                                </p>

                                {/* ✅ عرض بيانات التسجيل */}
                                <div className="enrollment-details mt-4">
                                    <ul className="list-unstyled">
                                        <li><strong>Course Type:</strong> {enrollmentData.courseType}</li>
                                        <li><strong>Enroll Period:</strong> {enrollmentData.enrollPeriod}</li>
                                        {enrollmentData.vipHours && (
                                            <li><strong>VIP Hours:</strong> {enrollmentData.numberOfHours} hour(s)</li>
                                        )}
                                        {enrollmentData.preferredInstructor && (
                                            <li><strong>Preferred Instructor:</strong> {enrollmentData.preferredInstructor}</li>
                                        )}
                                        {enrollmentData.learningGoal && (
                                            <li><strong>Learning Goal:</strong> {enrollmentData.learningGoal}</li>
                                        )}
                                        {enrollmentData.additionalNotes && (
                                            <li><strong>Notes:</strong> {enrollmentData.additionalNotes}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="button-group mt-4">
                                <Button variant="outline-danger" onClick={() => navigate('/courses')}>
                                    Explore More Courses
                                </Button>
                                <Button variant="danger" onClick={() => navigate('/')}>
                                    Go Back to Home
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Right side: Image */}
                    <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                        <div className="image-wrapper-confirmation">
                            <img
                                src="/images/Image 9.png"
                                alt="Student"
                                className="student-image-confirmation img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
