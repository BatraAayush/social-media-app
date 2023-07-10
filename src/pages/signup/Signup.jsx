import React from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";
import "./Signup.css";

const Signup = () => {
    const {
        sNameInputHandler,
        sLastNameInputHandler,
        sPasswordInputHandler,
        sUsernameInputHandler,
        sConformPasswordInputHandler,
        fetchSignupDetails,
    } = useLoginContext();
    return (
        <div className="login-container">
            <h1>Chit Chat</h1>
            <p>Connect. Share. Explore.</p>
            <h2>Signup</h2>
            <div className="form">
                <input
                    placeholder="First Name"
                    onChange={(e) => sNameInputHandler(e)}
                    type="text"
                />
                <input
                    placeholder="Last Name"
                    onChange={(e) => sLastNameInputHandler(e)}
                    type="text"
                />
                <input
                    placeholder="Username"
                    onChange={(e) => sUsernameInputHandler(e)}
                    type="text"
                />
                <input
                    placeholder="Password"
                    onChange={(e) => sPasswordInputHandler(e)}
                    type="password"
                />
                <input
                    placeholder="Conform Password"
                    onChange={(e) => sConformPasswordInputHandler(e)}
                    type="password"
                />
            </div>

            <button className="dark-btn" onClick={fetchSignupDetails}>Create New Account</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
