import React from 'react';
import StepCard from './StepCard';
import './HowItWorksSection.css';

const steps = [
    { stepNumber: "01", title: "Create an Account", description: "Sign up and create your account in just a few clicks.", imageName: "computer.png" }, // imageName prop is used now
    { stepNumber: "02", title: "Choose the Course", description: "Browse and choose from a variety of courses.", imageName: "headphone.png" }, // imageName prop is used now
    { stepNumber: "03", title: "Start Learning", description: "Start learning at your own pace with expert instructors.", imageName: "students.png" }  // imageName prop is used now
];

function HowItWorksSection() {
    return (
        <section className="how-it-works-section">
            <div className="section-header">
                <h5 className="how-it-work-title">How It Works</h5>
                <h2 className="section-main-title">Check How We Work <br /> in Easy Steps</h2>
            </div>
            <div className="steps-container">
                <div className="step-connector-line"></div>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <StepCard {...step} /> {/* Pass all step data including imageName */}
                        {index < steps.length - 1 && <div className="step-connector"></div>}
                    </React.Fragment>
                ))}
                <div className="step-connector-end"></div>
            </div>
        </section>
    );
}

export default HowItWorksSection;
