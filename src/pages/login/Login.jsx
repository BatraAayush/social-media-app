import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <strong>Cars Paradise</strong>
            <p>Social media for Cars</p>
            <h2>Log In</h2>
            <div className="form">
                <label>Username*</label>
                <input type="text" />
                <label>Password*</label>
                <input type="text" />
            </div>
            <button>Login</button>
            <Link to="/"><button>Guest Mode</button></Link>
            <p>
                Dont have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
};

export default Login;
