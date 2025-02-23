import React from "react";

const AboutPage = () => {
    return (
        
         <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1>About Us</h1>
            <p>
                Welcome to Expensify Pro Expense Management System. Our platform is designed to help businesses 
                efficiently track and manage expenses, ensuring better financial control and transparency.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our goal is to provide an easy-to-use and feature-rich expense management system that enables 
                businesses to streamline their financial workflows.
            </p>
            <h2>Why Choose Us?</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>✅ Easy expense tracking</li>
                <li>✅ Secure and reliable platform</li>
                <li>✅ Detailed financial insights</li>
                <li>✅ Customizable features to fit your needs</li>
            </ul>
            <h2>Contact Us</h2>
            <p>
                Have questions? Reach out to us at <a href="mailto:support@zidio.com">support@ExpensifyPro.com</a>.
            </p>
        </div>
    );
};

export default AboutPage;