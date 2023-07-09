import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useLoginContext } from "../../contexts/LoginProvider";
const Navigation = () => {
    const { userDetails, logoutHandler } = useLoginContext();
    return (
        <div>
            <div className="navigation">
                <div className="container-1">
                    <strong>Chit Chat</strong>
                    <Link to="/">Home</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/bookmarks">Bookmarks</Link>
                    <button onClick={logoutHandler}>Logout</button>
                </div>
                <div>
                    <Link to={`/profile/${userDetails._id}`}>{userDetails.firstName}</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
