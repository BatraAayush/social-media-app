import React, { useEffect, useState } from "react";
import "./PostCard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { RiUserUnfollowLine } from "react-icons/ri";
import { usePostContext } from "../../contexts/PostProvider";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";
import EditBox from "../edit-box/EditBox";
import { useUserContext } from "../../contexts/UserProvider";

export const PostCard = ({ post, details }) => {
    const { userDetails } = useLoginContext();
    const {
        deleteHandler,
        bookmarkHandler,
        unBookmarkHandler,
        likeHandler,
        dislikeHandler,
        bookmarks,
    } = usePostContext();
    const { users, followHandler, unFollowHandler } = useUserContext();
    const [user, setUser] = useState({});

    const fetchData = () => {
        const userx =users.find(({username}) => username === post.username);
        setUser(userx);
    }
    useEffect(() => {
        console.log(users);
        fetchData();
    }, [users]);
    const likedBy = post?.likes?.likedBy?.find(
        ({ username }) => username === userDetails.username
    );
    const [editBox, setEditBox] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const { _id, username, createdAt, content, likes, comments, mediaURL } =
        post;

    const date = new Date(createdAt);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - date.getTime();
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(monthsDiff / 12);

    const postAge = () => {
        if (yearsDiff) {
            return `${yearsDiff} yr ago`;
        } else if (monthsDiff) {
            return `${monthsDiff} mon ago`;
        } else if (daysDiff) {
            return `${daysDiff} days ago`;
        } else if (hoursDiff) {
            return `${hoursDiff} hr ago`;
        } else if (minutesDiff) {
            return `${minutesDiff} min ago`;
        } else {
            return `${secondsDiff} sec ago`;
        }
    };

    const bookmarkedBy = bookmarks.find((post) => post._id === _id);

    const followersWithUsername = user?.followers?.map(
        ({ username }) => username
    );
    const followed = followersWithUsername?.includes(userDetails?.username);

    return (
        <div
            style={{ border: details ? "none" : "1px solid #dae2e6" }}
            className="post-card"
        >
            <p className="container-2">
                <Link to={`/profile/${user?._id}`} className="profile">
                    <img
                        className="profile-pic"
                        src={user?.avatarUrl}
                        alt="profile pic"
                    />
                    <div>
                        <div>
                            {user?.firstName} {user?.lastName}
                        </div>
                        <div className="username">@{user?.username}</div>
                    </div>
                    <small>{postAge()}</small>
                </Link>
                <BsThreeDots
                    className="dot-icon"
                    onClick={() => setShowOptions(!showOptions)}
                />
                {showOptions && (
                    <div className="options-box">
                        {userDetails.username === username ? (
                            <>
                                <div className="option">
                                    <strong onClick={() => setEditBox(true)}>
                                        <AiFillEdit /> Edit
                                    </strong>
                                    {editBox && (
                                        <EditBox
                                            post={post}
                                            setEditBox={setEditBox}
                                            setShowOptions={setShowOptions}
                                        />
                                    )}
                                </div>
                                <div>
                                    <strong
                                        onClick={() => {
                                            deleteHandler(_id);
                                        }}
                                    >
                                        <AiOutlineDelete /> Delete
                                    </strong>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    {followed ? (
                                        <strong
                                            onClick={() => {
                                                unFollowHandler(user?._id);
                                                setShowOptions(false);
                                            }}
                                        >
                                            <RiUserUnfollowLine /> Unfollow
                                        </strong>
                                    ) : (
                                        <strong
                                            onClick={() => {
                                                setShowOptions(false);
                                                followHandler(user?._id);
                                            }}
                                        >
                                            <RiUserUnfollowLine /> Follow
                                        </strong>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </p>
            <Link to={`/post/${_id}`}>
                <p>{content}</p>
                {mediaURL !== "" && (
                    <img
                        className="post-img"
                        src={mediaURL}
                        alt="content img"
                    />
                )}
            </Link>
            <div className="container-1">
                <span
                    onClick={() => {
                        if (likedBy) {
                            dislikeHandler(_id);
                        } else likeHandler(_id);
                    }}
                >
                    <AiOutlineHeart
                        className="icon"
                        style={{
                            color: likedBy ? "red" : "black",
                        }}
                    />
                    {likes?.likeCount}
                </span>
                <Link to={`/post/${_id}`}>
                    <BiComment className="icon" />
                    {comments?.length}
                </Link>
                <span>
                    <AiOutlineShareAlt className="icon" />
                </span>
                <span
                    onClick={() => {
                        if (bookmarkedBy) {
                            unBookmarkHandler(_id);
                        } else {
                            bookmarkHandler(_id);
                        }
                    }}
                >
                    {bookmarkedBy ? (
                        <BsFillBookmarkFill className="icon" />
                    ) : (
                        <BsBookmark className="icon" />
                    )}
                </span>
            </div>
            {details && (
                <div className="comments">
                    <h3>Comments</h3>
                    {post?.comments?.map((comment, id) => (
                        <div key={id} className="comment">
                            <p>@{comment?.username}</p>
                            <p>{comment?.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostCard;
