import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div
            className="navigation"
        >
            <strong>Cars Paradise</strong>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
};

export default Navigation;
