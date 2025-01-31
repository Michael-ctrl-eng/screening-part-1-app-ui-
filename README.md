# How It Works UI Section - React Component

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-v18.2.0-blue.svg)](https://reactjs.org/)
[![PropTypes](https://img.shields.io/badge/PropTypes-v15.8.1-orange.svg)](https://www.npmjs.com/package/prop-types)

<!-- Live Demo Link (if you deploy one) -->
<!-- [Live Demo](https://your-live-demo-url.com) -->

<!-- Project Screenshot -->
<!-- ![How It Works UI Section Screenshot](path-to-your-screenshot.png) -->
<!-- (Replace 'path-to-your-screenshot.png' with the actual path if you include a screenshot in the repository) -->


## Overview

This repository contains a meticulously crafted React component, `HowItWorksSection`, designed to elegantly present a step-by-step "How It Works" process on a landing page.  The component is built with a focus on visual fidelity, responsiveness, reusability, and adherence to React best practices.

It visually replicates a design specification (provided separately) and demonstrates proficiency in:

*   **Component-Based Architecture:**  Utilizing reusable React components (`HowItWorksSection`, `StepCard`).
*   **Styling with CSS:** Achieving a visually appealing and pixel-perfect UI with detailed CSS styling, using `rem` units for font sizes and key spacing.
*   **Responsiveness:**  Ensuring the UI adapts gracefully to various screen sizes (desktop, tablet, mobile) through media queries.
*   **Data Validation:** Implementing `PropTypes` for robust component prop type checking in the `StepCard` component.
*   **Best Practices:**  Employing modern React techniques like functional components, Hooks, array mapping for component rendering, and clean code organization.
*   **Accessibility Considerations:**  Including `alt` text for images for improved accessibility.

## Features

*   **Visually Accurate Design:**  Faithfully replicates a given design specification for a "How It Works" section.
*   **Reusable `StepCard` Component:**  Each step is encapsulated in a reusable `StepCard` component for easy modification, content updates, and expansion.
*   **Fully Responsive Layout:**  The layout adapts seamlessly and maintains visual quality across desktop, tablet, and mobile devices.
*   **Clear Step-by-Step Presentation:**  Effectively guides users through the process in a logical and intuitive sequence.
*   **Customizable Content:**  Easy to customize content for each step through props: `stepNumber`, `title`, `description`, and `imageName`.
*   **Semantic HTML & Organized CSS:**  Clean, well-structured, and commented code for enhanced maintainability.
*   **PropTypes for Data Integrity:**  Utilizes `PropTypes` to ensure data type correctness and component robustness.
*   **Hover Effects & Subtle Animations:**  Includes subtle hover effects on the `StepCard` component to enhance interactivity.

## Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Michael-ctrl-eng/screening-part-1-app-ui-.git
    cd screening-part-1-app-ui-
    ```

2.  **Install dependencies:**

    ```bash
    npm install   # or yarn install
    ```

3.  **Ensure Images are in Place:**

    The application expects the following images to be located in the `src/assets/images/` directory:

    *   `computer.png`
    *   `headphone.png`
    *   `students.png`

    If these images are not present or if you wish to use different images, please place the appropriately named PNG image files in the `src/assets/images/` folder.

4.  **Run the development server:**

    ```bash
    npm start     # or yarn start
    ```

    The application will be accessible in your browser at `http://localhost:3000`.

## Usage

To integrate the `HowItWorksSection` component into your React application, import it as follows:

```javascript
import HowItWorksSection from './components/HowItWorksSection';

function App() {
  return (
    <div className="App">
      <HowItWorksSection />
    </div>
  );
}

export default App;

Technologies Used
React: A JavaScript library for building user interfaces.

CSS: For styling and layout, incorporating rem units for better responsiveness and accessibility.

Create React App: Used for project scaffolding, setup, and the development environment.

PropTypes: For runtime type checking of React props, enhancing component robustness.

React Icons: For optional inclusion of icons (not directly used in the base component but available for extension).

Nunito Sans Font (Google Fonts): Used for consistent and visually appealing typography throughout the UI section.

Author
Michael (Michael-ctrl-eng)
michael.makram.zm@gmail.com

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
