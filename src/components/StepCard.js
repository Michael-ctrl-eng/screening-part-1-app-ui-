import React from 'react';
import './StepCard.css';
import PropTypes from 'prop-types'; // Import PropTypes

function StepCard({ stepNumber, title, description, imageSrc }) {
    return (
        <div className="step-card">
            <div className="diamond-shape-container">
                <div className="diamond-shape">
                    <div className="step-number-circle">
                        <span className="step-number">{stepNumber}</span>
                    </div>
                    {imageSrc && <img src={imageSrc} alt={title} className="step-image" />} {/* Conditional rendering */}
                </div>
            </div>
            <div className="step-content">
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{description}</p>
            </div>
        </div>
    );
}

StepCard.propTypes = { // PropTypes for validation
    stepNumber: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
};

export default StepCard;
