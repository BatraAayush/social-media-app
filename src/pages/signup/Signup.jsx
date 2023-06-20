import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="login-container">
            <strong>Cars Paradise</strong>
            <p>Social media for Cars</p>
            <h2>Signup</h2>
            <div className="form">
                <label>Name*</label>
                <input type="text" />
                <label>Username*</label>
                <input type="text" />
                <label>Password*</label>
                <input type="text" />
                <label>Conform Password*</label>
                <input type="text" />
            </div>

            <button>Create New Account</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
