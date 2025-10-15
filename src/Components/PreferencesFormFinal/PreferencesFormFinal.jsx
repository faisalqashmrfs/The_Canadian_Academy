import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const formStyles = `
  .preferences-form-container {
    padding: 30px;
    max-width: 500px;
    margin: 50px auto;
  }
  .form-group-custom .form-control,
  .form-group-custom .form-select {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    height: calc(1.5em + .75rem + 2px);
    font-size: 1rem;
  }
  .form-group-custom .form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
  }
  .form-group-custom .form-control:focus,
  .form-group-custom .form-select:focus {
    box-shadow: none;
    border-color: #dc3545;
  }
  .enroll-button {
    background-color: #dc3545 !important;
    border-color: #dc3545 !important;
    font-weight: bold;
    padding: 10px 0;
    width: 100%;
    margin-top: 30px;
  }
  .enroll-button:hover {
    background-color: #c82333 !important;
    border-color: #bd2130 !important;
  }
  h4.preference-title {
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #000;
    font-size: 1.5rem;
  }
  h4.preference-title:first-child {
    margin-top: 0;
  }
  .form-check-input:checked {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  .vip-switch-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
  .vip-switch-label {
    font-size: 1rem;
    color: #6c757d;
  }
  .number-input-group {
    position: relative;
  }
  .number-input-controls {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
  }
  .number-input-controls button {
    background: none;
    border: none;
    font-size: 0.8rem;
    color: #dc3545;
    cursor: pointer;
    line-height: 1;
  }
`;

function PreferencesFormFinal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    language: '',
    courseType: '',
    enrollPeriod: '',
    vipHours: false,
    numberOfHours: 1,
    additionalNotes: '',
    preferredInstructor: '',
    learningGoal: '',
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleHourChange = (delta) => {
    setFormData((prev) => {
      const newHours = Math.max(1, (parseInt(prev.numberOfHours) || 1) + delta);
      return { ...prev, numberOfHours: newHours };
    });
  };

  const handleEnroll = () => {
    console.log('بيانات التفضيلات النهائية:', formData);
    navigate('/enroll-final');
  };

  return (
    <>
      <style>{formStyles}</style>
      <Container className="preferences-form-container">
        <Form>
          <h4 className="preference-title">Language</h4>

          <Form.Group className="mb-3 form-group-custom">
            <Form.Select name="language" value={formData.language} onChange={handleChange} required>
              <option value="" disabled hidden>Choose the Language</option>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 form-group-custom">
            <Form.Select name="courseType" value={formData.courseType} onChange={handleChange} required>
              <option value="" disabled hidden>Choose the Course Type</option>
              <option value="Standard">Standard</option>
              <option value="Intensive">Intensive</option>
              <option value="Conversational">Conversational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 form-group-custom">
            <Form.Select name="enrollPeriod" value={formData.enrollPeriod} onChange={handleChange} required>
              <option value="" disabled hidden>Enroll Period</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </Form.Select>
          </Form.Group>

          <h4 className="preference-title">Other Preference</h4>

          <div className="vip-switch-group">
            <span className="vip-switch-label">want an VIP hours</span>
            <Form.Check
              type="switch"
              id="vip-hours-switch"
              name="vipHours"
              checked={formData.vipHours}
              onChange={handleChange}
              label=""
            />
          </div>

          {formData.vipHours && (
            <Form.Group className="mb-3 form-group-custom number-input-group">
              <Form.Control
                type="number"
                placeholder="number of hours"
                name="numberOfHours"
                value={formData.numberOfHours}
                onChange={handleChange}
                min="1"
                required
              />
              <div className="number-input-controls">
                <button type="button" onClick={() => handleHourChange(1)}>▲</button>
                <button type="button" onClick={() => handleHourChange(-1)}>▼</button>
              </div>
            </Form.Group>
          )}

          <Form.Group className="mb-3 form-group-custom">
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="additional notes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 form-group-custom">
            <Form.Control
              type="text"
              placeholder="Preferred Instructor"
              name="preferredInstructor"
              value={formData.preferredInstructor}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 form-group-custom">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Your learning goal"
              name="learningGoal"
              value={formData.learningGoal}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="button" className="enroll-button" onClick={handleEnroll}>
            Enroll &nbsp; <span aria-hidden="true">▶</span>
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default PreferencesFormFinal;
