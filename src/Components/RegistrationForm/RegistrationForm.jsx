import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function RegistrationForm({ onSubmitSuccess }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // تحقق من صحة البيانات أو إرسالها للسيرفر هنا
        // ثم الانتقال للخطوة التالية
        if (formData.firstName && formData.lastName && formData.email) {
            onSubmitSuccess(); // ← هذا هو التعديل المهم
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button type="submit" variant="danger">
                Continue
            </Button>
        </Form>
    );
}
