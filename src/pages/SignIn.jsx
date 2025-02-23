import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const SignInPage = () => {
    const navigate = useNavigate(); // Initialize navigate

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        
        // Simulate successful signup and redirect to login page
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <div style={pageStyle}>
            <div style={formContainer}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                    <input 
                        type="tel" 
                        name="number" 
                        placeholder="Phone Number" 
                        value={formData.number} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>Sign Up</button>
                </form>
                <p style={{ marginTop: "15px" }}>
                    Already have an account? 
                    <a href="/login" style={styles.link}>Login</a>
                </p>
            </div>
        </div>
    );
};

// Styles
const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5"
};

const formContainer = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center"
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
};

const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%"
};

const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer"
};

const linkStyle = {
    color: "#007BFF",
    cursor: "pointer",
    marginLeft: "5px"
};

export default SignInPage;
