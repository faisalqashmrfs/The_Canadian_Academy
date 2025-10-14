import React from 'react';
import './Inroll.css';
import Footer from '../../Components/Footer/Footer';
import PreferencesFormFinal from '../../Components/PreferencesFormFinal/PreferencesFormFinal';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import { useLocation } from 'react-router-dom';

export default function InrollFinal() {
  const location = useLocation();
  const formData = location.state || {};

  return (
    <div className="enroll-page">
      <header className="enroll-header"></header>

      <section className="progress-section container my-4">
        <ProgressBar currentStep={3} />
      </section>

      <section className="enroll-form-section container my-5">
        <div className="row">
          <div className="col-md-6">
            <PreferencesFormFinal initialData={formData} />
          </div>

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
