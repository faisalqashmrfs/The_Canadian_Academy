// src/components/CourseDetails/ProgramHighlights.jsx

import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ProgramHighlights = ({ highlights }) => {
  return (
    <div id="highlights" className="border rounded p-4 mb-4">
      <h3 className="mb-4">Program Highlights</h3>

      <Row>
        {highlights.map(item => (
          <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
            <h1
              className="text-danger fw-bold"
              style={{ opacity: 0.3, fontSize: '2.5rem' }}
            >
              {item.id}
            </h1>
            <h5 className="fw-bold">{item.title}</h5>
            <p className="text-secondary small">{item.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProgramHighlights;
