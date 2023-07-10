import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useLoginContext } from "../../contexts/LoginProvider";
import { toast } from "react-toastify";


const Login = () => {
    const {usernameInputHandler, passwordInputHandler, fetchLoginDetails} = useLoginContext();
    const notify = () => {
        toast("Logged In");
    };

    return (
        <div className="login-container">
            <h1>Chit Chat</h1>
            <p>Connect. Share. Explore.</p>
            <h2>Log In</h2>
            <div className="form">
                <input placeholder="Username" onChange={(e) => usernameInputHandler(e)} type="text" />
                <input placeholder="password" onChange={(e) => passwordInputHandler(e)} type="password" />
            </div>
            <button className="dark-btn" onClick={() => {
                fetchLoginDetails("normal");
                notify();
                }}>Login</button>
            <button className="dark-btn" onClick={() => {
                fetchLoginDetails("test");
                notify();
                }}>Guest Mode</button>
            <p>
                Dont have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
};

export default Login;
