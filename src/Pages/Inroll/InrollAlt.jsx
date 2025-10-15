import React from 'react';
import './Inroll.css';
import Footer from '../../Components/Footer/Footer';
import PreferencesForm from '../../Components/PreferencesForm/PreferencesForm';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { useLocation } from 'react-router-dom';

export default function InrollAlt() {
    const location = useLocation();
    const initialData = location.state || {};

    return (
        <div className="enroll-page">
            {/* ✅ Hero Section */}
            <header className="enroll-header"></header>

            {/* ✅ Progress Bar للخطوة 2 */}
            <section className="progress-section container my-4">
                <ProgressBar currentStep={2} />
            </section>

            {/* ✅ قسم النموذج والصورة */}
            <section className="enroll-form-section container my-5">
                <div className="row">
                    {/* ✅ نموذج تفضيلات الدورة */}
                    <div className="col-md-6">
                        <PreferencesForm initialData={initialData} />
                    </div>

                    {/* ✅ صورة الشابة */}
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="image-wrapper">
                            <img src="/images/Image 9.png" alt="Student" className="student-image" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
