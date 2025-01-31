import React from 'react';
import './StepCard.css';
import PropTypes from 'prop-types';
import computerImg from '../../assets/images/computer.png'; // Import images directly
import headphoneImg from '../../assets/images/headphone.png';
import studentsImg from '../../assets/images/students.png';

function StepCard({ stepNumber, title, description, imageName }) { // imageName prop is used to select image
    let imageSource;
    switch (imageName) {
        case 'computer.png': imageSource = computerImg; break;
        case 'headphone.png': imageSource = headphoneImg; break;
        case 'students.png': imageSource = studentsImg; break;
        default: imageSource = null; // Or a default placeholder image if you have one
    }

    return (
        <div className="step-card">
            <div className="diamond-shape-container">
                <div className="diamond-shape">
                    <div className="step-number-circle">
                        <span className="step-number">{stepNumber}</span>
                    </div>
                    {imageSource && <img src={imageSource} alt={title} className="step-image" />}
                </div>
            </div>
            <div className="step-content">
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{description}</p>
            </div>
        </div>
    );
}

StepCard.propTypes = {
    stepNumber: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired // Now expects imageName string
};

export default StepCard;
