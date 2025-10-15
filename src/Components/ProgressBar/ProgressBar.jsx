import React from 'react';
import './ProgressBar.css';

const MapleLeafIcon = ({ stepId, currentStep }) => {
    const isRedIcon = stepId <= currentStep || stepId === currentStep + 1;
    const imageFileName = isRedIcon ? 'logo-red.svg' : 'grey.png';
    const imageSrc = `/images/${imageFileName}`;

    return (
        <img
            src={imageSrc}
            alt="Maple Leaf"
            className="maple-icon"
        />
    );
};

const STEPS = [
    { id: 1, title: 'Personal Info' },
    { id: 2, title: 'Course Info' },
    { id: 3, title: 'Confirmation' },
];

function ProgressBar({ currentStep }) {
    const activeColor = '#dc3545';
    const inactiveColor = '#adb5bd';

    return (
        <div className="progress-bar-container">
            {STEPS.map((step, index) => {
                const isActive = step.id <= currentStep;
                const isCompleted = step.id < currentStep;
                const isLastStep = index === STEPS.length - 1;

                const stepTextColor = isActive ? activeColor : inactiveColor;
                const lineColor = isCompleted ? activeColor : inactiveColor;

                return (
                    <React.Fragment key={step.id}>
                        <div className="step-item">
                            <MapleLeafIcon stepId={step.id} currentStep={currentStep} />
                            <div className="step-title" style={{ color: stepTextColor }}>
                                {step.title}
                            </div>
                        </div>

                        {!isLastStep && (
                            <div className="step-line" style={{ backgroundColor: lineColor }}></div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default ProgressBar;
