import React, { useState } from 'react';
import './stepper.css';

const Stepper = (props) => {
    const { steps } = props;
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <div className="stepper">
            <div className="stepper-header">
                {steps.map((step, index) => (
                    <div 
                        key={step.title} 
                        className={`stepper-header-item ${currentStep === index ? "active" : ""}`}
                    >
                        {step.title}
                    </div>
                ))}
            </div>
            <div className="stepper-body">
                {steps[currentStep].content}
            </div>
            <div className="stepper-footer">
                <button onClick={handlePrev} disabled={currentStep === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentStep === steps.length - 1}>Next</button>
            </div>
        </div>
    );
}

export default Stepper;
