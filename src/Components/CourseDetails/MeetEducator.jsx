// src/components/CourseDetails/MeetEducator.jsx

import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const MeetEducator = ({ educator }) => {
    return (
        <div id="meet-educator" className="border rounded p-4 mb-4">
            <h3 className="mb-4">Meet Our Educator</h3>

            <Card className="border-0">
                <Row className="g-0">
                    {/* عمود الصورة */}
                    <Col xs={4} md={2} className="text-center">
                        <Image
                            src={educator.image} // الصورة من مجلد public
                            alt={educator.name}
                            className="rounded-circle border"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <p className="mt-2 mb-0 fw-bold">{educator.name}</p>
                    </Col>

                    {/* عمود السيرة الذاتية */}
                    <Col xs={8} md={10} className="ps-4 d-flex align-items-center">
                        <Card.Body className="p-0">
                            <Card.Text>{educator.bio}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default MeetEducator;
