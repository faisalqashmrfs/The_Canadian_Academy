// src/components/CourseDetails/CourseSection.jsx

import React from 'react';

const CourseSection = ({ id, title, content }) => {
    return (
        // نستخدم border و rounded و p-4 و mb-4 من Bootstrap للتنسيق
        <div id={id} className="border rounded p-4 mb-4">
            <h3 className="mb-3">{title}</h3>
            <div className="text-secondary">{content}</div>
        </div>
    );
};

export default CourseSection;