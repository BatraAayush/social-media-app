import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useLoginContext } from "../../contexts/LoginProvider";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";

const Navigation = () => {
    const { userDetails, logoutHandler } = useLoginContext();

    return (
        <div>
            <div className="navigation">
                <div className="container-1">
                    <div className="page-nav-container">
                    <h2>Chit Chat</h2>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "inactive nav-link"
                        }
                        to="/"
                    >
                        <AiFillHome /> Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "inactive nav-link"
                        }
                        to="/explore"
                    >
                        <MdOutlineExplore /> Explore
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "inactive nav-link"
                        }
                        to="/bookmarks"
                    >
                        <BsFillBookmarkFill /> Bookmarks
                    </NavLink>
                    <button className="dark-btn" onClick={logoutHandler}>
                        Logout
                    </button>
                    </div>
                    <div>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active profile" : "profile"
                            }
                            to={`/profile/${userDetails._id}`}
                        >
                            <div>
                                <img
                                    className="profile-pic"
                                    src={userDetails.avatarUrl}
                                    alt="profile-pic"
                                />
                            </div>
                            <div>
                                <div className="name">
                                    {userDetails.firstName}{" "}
                                    {userDetails.lastName}
                                </div>
                                <div className="username">
                                    @{userDetails.username}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
