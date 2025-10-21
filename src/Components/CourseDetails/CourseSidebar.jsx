// src/components/CourseDetails/CourseSidebar.jsx

import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CourseSidebar = ({ isEnrolled, activeSection, onNavClick , id}) => {
  const navigate = useNavigate();

  // تمرير سلس إلى القسم المطلوب
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      onNavClick(id);
    }
  };

  // حركة انتقال إلى صفحة التسجيل
  const handleEnrollClick = () => {
    const page = document.getElementById('page-wrapper');
    if (page) {
      page.classList.add('slide-out');
      setTimeout(() => {
        navigate(`/Inroll/${id}`);
      }, 600);
    } else {
      navigate(`/Inroll/${id}`);
    }
  };

  return (
    <div className='courseSliderforhid'>
      {/* قائمة الروابط الجانبية */}
      <ListGroup variant="flush" className="border rounded mb-4">
        <ListGroup.Item
          action
          onClick={() => scrollToSection('overview')}
          className={activeSection === 'overview' ? 'bg-danger text-white fw-bold' : ''}
        >
          Course Overview
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => scrollToSection('prerequisites')}
          className={activeSection === 'prerequisites' ? 'bg-danger text-white fw-bold' : ''}
        >
          Prerequisites
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => scrollToSection('highlights')}
          className={activeSection === 'highlights' ? 'bg-danger text-white fw-bold' : ''}
        >
          Program Highlights
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => scrollToSection('levels-offered')}
          className={activeSection === 'levels-offered' ? 'bg-danger text-white fw-bold' : ''}
        >
          Levels Offered
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => scrollToSection('meet-educator')}
          className={activeSection === 'meet-educator' ? 'bg-danger text-white fw-bold' : ''}
        >
          Meet Our Educator
        </ListGroup.Item>
      </ListGroup>

      {/* زر Enroll Now بتصميم Figma */}
      <Button
        onClick={handleEnrollClick}
        disabled={isEnrolled}
        className="mt-3 w-100"
        style={{
          width: '355px',
          height: '54px',
          backgroundColor: isEnrolled ? '#28a745' : 'rgba(217, 30, 30, 1)',
          border: 'none',
          borderRadius: '52px',
          padding: '16px 32px',
          fontWeight: 'bold',
          fontSize: '1rem',
          color: '#fff',
          transition: 'background-color 0.3s ease',
        }}
      >
        {isEnrolled ? ' تم التسجيل' : 'Enroll Now'}
      </Button>
    </div>
  );
};

export default CourseSidebar;
