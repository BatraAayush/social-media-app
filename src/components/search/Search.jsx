import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserProvider";
import "./Search.css";
import { useLoginContext } from "../../contexts/LoginProvider";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Navigation from "../navigation/Navigation";

const Search = () => {
    const { users, fetchUsers, followHandler } = useUserContext();
    const { userDetails } = useLoginContext();
    const [input, setInput] = useState("");
    const getFilteredUsers = () => {
        let filteredUsers = users.filter(
            (user) => user.username !== userDetails.username
        );
        if (input !== "") {
            filteredUsers = filteredUsers.filter((user) =>
                user.username.toLowerCase().includes(input.toLowerCase())
            );
        }
        const followingUsernames = userDetails.following.map(
            ({ username }) => username
        );
        filteredUsers = filteredUsers.filter(
            (user) => !followingUsernames.includes(user.username)
        );
        return filteredUsers;
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    const location = useLocation();
    const path = location.pathname;
    let pathX = "";
    if(path === "/" || path === "/explore" || path === "/bookmarks" || path === "/search") {
        pathX = path
    } else { //logic for '/profile/--profileId--' to '/profile'
        pathX = path.slice(0, path.indexOf("/", 1));
    }
    return (
        <>
            {(pathX === "/" || pathX === "/explore" || pathX === "/bookmarks" || pathX === "/profile" || pathX === "/post") && (
                <>
                    <div className="search">
                        <div className="search-section">
                            <AiOutlineSearch className="search-icon" />
                            <input
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                                placeholder="Search User"
                            />
                            <div className="suggested-users">
                                <h2>Suggested Users</h2>
                                {getFilteredUsers().length === 0 && (
                                    <h3>No User Found</h3>
                                )}
                                {getFilteredUsers().map(
                                    ({
                                        avatarUrl,
                                        firstName,
                                        lastName,
                                        username,
                                        _id,
                                    }) => (
                                        <div>
                                            <div className="user">
                                                <Link
                                                    className="container-1"
                                                    to={`/profile/${_id}`}
                                                >
                                                    <img
                                                        className="profile-pic"
                                                        src={avatarUrl}
                                                        alt="profile"
                                                    />
                                                    <div className="username">
                                                        <div>
                                                            {firstName}{" "}
                                                            {lastName}
                                                        </div>
                                                        <div>@{username}</div>
                                                    </div>
                                                </Link>
                                                <button
                                                    className="dark-btn"
                                                    onClick={() => {
                                                        followHandler(_id);
                                                    }}
                                                >
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
            {pathX === "/search" && (
                <div className="main-layout">
                    <Navigation />
                    <div className="search mobile-search">
                        <div className="search-section">
                            <AiOutlineSearch className="search-icon" />
                            <input
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                                placeholder="Search User"
                            />
                            <div className="suggested-users">
                                <h2>Suggested Users</h2>
                                {getFilteredUsers().length === 0 && (
                                    <h3>No User Found</h3>
                                )}
                                {getFilteredUsers().map(
                                    ({
                                        avatarUrl,
                                        firstName,
                                        lastName,
                                        username,
                                        _id,
                                    }) => (
                                        <div>
                                            <div className="user">
                                                <Link
                                                    className="container-1"
                                                    to={`/profile/${_id}`}
                                                >
                                                    <img
                                                        className="profile-pic"
                                                        src={avatarUrl}
                                                        alt="profile"
                                                    />
                                                    <div className="username">
                                                        <div>
                                                            {firstName}{" "}
                                                            {lastName}
                                                        </div>
                                                        <div>@{username}</div>
                                                    </div>
                                                </Link>
                                                <button
                                                    className="dark-btn"
                                                    onClick={() => {
                                                        followHandler(_id);
                                                    }}
                                                >
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
