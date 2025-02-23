import React from "react";

const LoginPage = () => {
    const styles = {
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        input: {
            width: "300px",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "white",
            color: "black",
        },
        signup: {
            marginTop: "15px",
        },
        link: {
            color: "#007BFF",
            textDecoration: "none",
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form style={styles.form}>
                <input type="email" placeholder="Email" required style={styles.input} />
                <input type="password" placeholder="Password" required style={styles.input} />
                <button type="submit" style={styles.button}>Login</button>
            </form>
            <div style={styles.signup}>
                Don't have an account? <a href="/signup" style={styles.link}>Sign up</a>
            </div>
        </div>
    );
};

export default LoginPage;
