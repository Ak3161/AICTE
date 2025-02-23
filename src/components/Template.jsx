import React from "react";
import { Outlet } from "react-router-dom";

const Template = () => {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontFamily: "Arial, sans-serif",
        },
        box: {
            backgroundColor: "#ddd",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            minWidth: "350px",
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <Outlet />
            </div>
        </div>
    );
};

export default Template;
