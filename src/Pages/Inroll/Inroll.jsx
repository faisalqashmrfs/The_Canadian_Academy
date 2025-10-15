// import React, { useState } from 'react';
// import './Inroll.css';
// import Footer from '../../Components/Footer/Footer';
// import ProgressBar from '../../Components/ProgressBar/ProgressBar';
// import { Form, Button, Row, Col, Container } from 'react-bootstrap';
// import { FaGlobe, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

import InrollAlt from "./InrollAlt";

// export default function Inroll() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     country: '',
//     phone: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/enroll-alt', { state: formData });
//   };

//   return (
//     <div className="enroll-page">
//       {/* ✅ Hero Section */}
//       <header className="enroll-header"></header>

//       {/* ✅ Progress Bar */}
//       <section className="progress-section container my-4">
//         <ProgressBar currentStep={1} />
//       </section>

//       {/* ✅ Form Section */}
//       <section className="enroll-form-section container my-5">
//         <div className="row">
//           {/* ✅ Form Column */}
//           <div className="col-md-6">
//             <Container className="registration-form-container">
//               <h4 className="form-title">Personal Information</h4>
//               <Form onSubmit={handleSubmit}>
//                 <Row className="mb-3">
//                   <Col>
//                     <Form.Group className="form-group-custom">
//                       <Form.Control
//                         type="text"
//                         placeholder="First Name"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group className="form-group-custom">
//                       <Form.Control
//                         type="text"
//                         placeholder="Last Name"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Form.Group className="mb-3 form-group-custom country-select-group">
//                   <div className="input-group">
//                     <span className="input-group-text"><FaGlobe /></span>
//                     <Form.Select
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="" disabled hidden>Country</option>
//                       <option value="NL">Netherlands</option>
//                       <option value="CA">Canada</option>
//                       <option value="US">United States</option>
//                     </Form.Select>
//                   </div>
//                 </Form.Group>

//                 <Form.Group className="mb-3 form-group-custom">
//                   <div className="input-group">
//                     <Form.Control
//                       type="tel"
//                       placeholder="Phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                     />
//                     <span className="input-group-text"><FaPhoneAlt className="icon-red" /></span>
//                   </div>
//                 </Form.Group>

//                 <Form.Group className="mb-3 form-group-custom">
//                   <div className="input-group">
//                     <Form.Control
//                       type="email"
//                       placeholder="Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                     <span className="input-group-text"><FaEnvelope className="icon-red" /></span>
//                   </div>
//                 </Form.Group>

//                 {/* ✅ Continue Button */}
//                 <Button type="submit" className="continue-button">
//                   Continue &nbsp; <span aria-hidden="true">▶</span>
//                 </Button>
//               </Form>
//             </Container>
//           </div>

//           {/* ✅ Image Column */}
//           <div className="col-md-6 d-flex align-items-center justify-content-center">
//             <div className="image-wrapper">
//               <img src="/images/Image 9.png" alt="Student" className="student-image" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
const Inroll = () => {
  return (
    <div>
      <InrollAlt/>
    </div>
  );
}



export default Inroll;