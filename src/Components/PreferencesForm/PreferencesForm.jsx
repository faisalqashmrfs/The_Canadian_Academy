import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
// استيراد أيقونات Globe, Phone, و Email
import { FaGlobe, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// يجب استيراد ملفات تنسيقات البوتستراب في ملفك الرئيسي (مثل index.js أو App.js)
// import 'bootstrap/dist/css/bootstrap.min.css';

// --- تنسيقات CSS المُطابقة للصورة ---
const formStyles = `
  .registration-form-container {
    padding: 30px;
    /* لإضفاء مظهر نظيف ومُركّز */
    max-width: 500px;
    margin: 50px auto; 
  }
  /* تنسيق حقول الإدخال لتظهر كخط سفلي فقط */
  .form-group-custom .form-control {
    border: none;
    border-bottom: 1px solid #ccc; /* الخط السفلي الفاتح */
    border-radius: 0;
    padding-left: 0; 
  }
  .form-group-custom .form-control:focus {
    box-shadow: none; /* إزالة الظل عند التركيز */
    border-color: #dc3545; /* يمكن تغيير لون الخط عند التركيز */
  }
  /* تنسيق الأيقونات المدمجة مع الحقول */
  .form-group-custom .input-group-text {
    background-color: transparent;
    border: none;
    padding-right: 0.5rem;
    padding-left: 0;
  }
  /* تنسيق زر "Continue" باللون الأحمر القوي */
  .continue-button {
    background-color: #dc3545 !important; 
    border-color: #dc3545 !important;
    font-weight: bold;
    padding: 10px 0;
    width: 100%;
    margin-top: 15px;
  }
  .continue-button:hover {
    background-color: #c82333 !important;
    border-color: #bd2130 !important;
  }
  /* تنسيق عنوان "Personal Information" */
  h4.form-title {
    font-weight: bold;
    margin-bottom: 20px;
  }
  /* إخفاء الحدود العلوية والجانبية لحقل البلد (Country) مع ترك السهم */
  .country-select-group .input-group-text + select.form-control {
    padding-right: 2.25rem;
  }
  /* تنسيق أيقونات الهاتف والإيميل باللون الأحمر */
  .icon-red {
    color: #dc3545;
  }
`;

function RegistrationForm() {
  // استخدام useState لإدارة حالة بيانات النموذج
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('بيانات النموذج:', formData);
    alert('تم إرسال النموذج بنجاح!');
  };

  return (
    <>
      {/* 1. دمج التنسيقات في المكون */}
      <style>{formStyles}</style>

      <Container className="registration-form-container">

        {/* العنوان مطابق للصورة */}
        <h4 className="form-title">Personal Information</h4>

        <Form onSubmit={handleSubmit}>

          {/* الاسم الأول والاسم الأخير في صف واحد */}
          <Row className="mb-3">
            <Col>
              <Form.Group className="form-group-custom">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="form-group-custom">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* حقل الدولة (Country) مع أيقونة الكرة الأرضية */}
          <Form.Group className="mb-3 form-group-custom country-select-group">
            <div className="input-group">
              <span className="input-group-text">
                <FaGlobe />
              </span>
              <Form.Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                {/* الخيار الافتراضي ليكون بمثابة الـ Placeholder */}
                <option value="" disabled hidden>Country</option>
                <option value="EG">Egypt</option>
                <option value="SA">Saudi Arabia</option>
                <option value="AE">UAE</option>
                <option value="OTHER">Other</option>
              </Form.Select>
            </div>
          </Form.Group>

          {/* حقل الهاتف (Phone) مع أيقونة الهاتف الحمراء */}
          <Form.Group className="mb-3 form-group-custom">
            <div className="input-group">
              <Form.Control
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <span className="input-group-text">
                <FaPhoneAlt className="icon-red" />
              </span>
            </div>
          </Form.Group>

          {/* حقل البريد الإلكتروني (Email) مع أيقونة البريد الحمراء */}
          <Form.Group className="mb-3 form-group-custom">
            <div className="input-group">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="input-group-text">
                <FaEnvelope className="icon-red" />
              </span>
            </div>
          </Form.Group>

          {/* زر "Continue" الأحمر */}
          <Button type="submit" className="continue-button">
            Continue &nbsp; <span aria-hidden="true">▶</span>
          </Button>

        </Form>
      </Container>
    </>
  );
}

export default RegistrationForm;