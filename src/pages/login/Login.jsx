import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useLoginContext } from "../../contexts/LoginProvider";

const Login = () => {
    const {usernameInputHandler, passwordInputHandler, fetchLoginDetails} = useLoginContext();
    return (
        <div className="login-container">
            <h1>Chit Chat</h1>
            <p>Connect. Share. Explore.</p>
            <h2>Log In</h2>
            <div className="form">
                <input placeholder="Username" onChange={(e) => usernameInputHandler(e)} type="text" />
                <input placeholder="password" onChange={(e) => passwordInputHandler(e)} type="password" />
            </div>
            <button onClick={() => fetchLoginDetails("normal")}>Login</button>
            <button onClick={() => fetchLoginDetails("test")}>Guest Mode</button>
            <p>
                Dont have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
};

export default Login;
