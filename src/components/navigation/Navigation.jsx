import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useLoginContext } from "../../contexts/LoginProvider";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Navigation = () => {
    const { userDetails, logoutHandler } = useLoginContext();

    return (
        <div>
            <div className="navigation">
                <div className="container-1">
                    <div className="page-nav-container">
                    <h2 className="desktop">Chit Chat</h2>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "inactive nav-link"
                        }
                        to="/"
                    >
                        <AiFillHome className="icon"/> <span className="desktop">Home</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "inactive nav-link"
                        }
                        to="/explore"
                    >
                        <MdOutlineExplore className="icon"/> <span className="desktop">Explore</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "inactive nav-link"
                        }
                        to="/bookmarks"
                    >
                        <BsFillBookmarkFill className="icon"/> <span className="desktop">Bookmarks</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active nav-link mobile" : "inactive nav-link mobile"
                        }
                        to="/search"
                    >
                        <AiOutlineSearch className="icon"/> <span className="desktop">Search</span>
                    </NavLink>
                    <button className="dark-btn " onClick={logoutHandler}>
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
                            <div className="desktop">
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
