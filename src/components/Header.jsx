import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.png"; // Replace with actual logo path

const Header = () => {
    const [active, setActive] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") {
            setActive("home");
        } else if (location.pathname === "/about") {
            setActive("about");
        } else if (location.pathname.startsWith("/auth")) {
            setActive("login");
        } else if (location.pathname.startsWith("/dashboard")) {
            setActive("dashboard");
        }
    }, [location.pathname]);

    const handleNavigation = (path) => {
        setActive(path);
        navigate(path);  // Ensure proper navigation
    };

    return (
        <div className="header-box">
            <div className="nav-left">
                <img src={logo} alt="Company Logo" className="logo" />
                <span className="company-name">Expensify Pro</span>
            </div>

            <div className="nav-right">
                <button
                    className={active === "home" ? "active" : ""}
                    onClick={() => handleNavigation("/")}
                >
                    Home
                </button>
                <button
                    className={active === "about" ? "active" : ""}
                    onClick={() => handleNavigation("/about")}
                >
                    About
                </button>
                <button
                    className={active === "dashboard" ? "active" : ""}
                    onClick={() => handleNavigation("/dashboard")}
                >
                    Dashboard
                </button>
                <button
                    className={active === "login" ? "active" : ""}
                    onClick={() => handleNavigation("/auth/login")}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Header;
