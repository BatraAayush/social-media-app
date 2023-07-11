import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useLoginContext } from "../../contexts/LoginProvider";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Login = () => {
    const { usernameInputHandler, passwordInputHandler, fetchLoginDetails } =
        useLoginContext();
    const [show, setShow] = useState(false);

    return (
        <div className="login-container">
            <h1>Chit Chat</h1>
            <p>Connect. Share. Explore.</p>
            <h2>Log In</h2>
            <div className="form">
                <input
                    placeholder="Username"
                    onChange={(e) => usernameInputHandler(e)}
                    type="text"
                />
                <input
                    className="password"
                    placeholder="password"
                    onChange={(e) => passwordInputHandler(e)}
                    type={show ? "text" : "password"}
                />
                <button className="show-btn" onClick={() => setShow(!show)}>
                    {show ? <BiShow/> : <BiHide/>}
                </button>
            </div>
            <button
                className="dark-btn"
                onClick={() => {
                    fetchLoginDetails("normal");
                }}
            >
                Login
            </button>
            <button
                className="dark-btn"
                onClick={() => {
                    fetchLoginDetails("test");
                }}
            >
                Guest Mode
            </button>
            <p>
                Dont have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
};

export default Login;
