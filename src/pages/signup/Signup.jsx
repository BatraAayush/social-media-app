import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";
import "./Signup.css";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Signup = () => {
    const {
        sNameInputHandler,
        sLastNameInputHandler,
        sPasswordInputHandler,
        sUsernameInputHandler,
        sConformPasswordInputHandler,
        fetchSignupDetails,
    } = useLoginContext();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);


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
                    className="password"
                    placeholder="Password"
                    onChange={(e) => sPasswordInputHandler(e)}
                    type={show ? "text" : "password"}
                />{" "}
                <button className="show-btn" onClick={() => setShow(!show)}>
                    {show ? <BiShow /> : <BiHide />}
                </button>
                <input
                    className="password"
                    placeholder="Conform Password"
                    onChange={(e) => sConformPasswordInputHandler(e)}
                    type={show2 ? "text" : "password"}
                />
                <button className="show-btn" onClick={() => setShow2(!show2)}>
                    {show2 ? <BiShow /> : <BiHide />}
                </button>
            </div>

            <button className="dark-btn" onClick={fetchSignupDetails}>
                Create New Account
            </button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
