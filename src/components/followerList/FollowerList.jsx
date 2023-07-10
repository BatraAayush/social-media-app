import React from "react";
import "./FollowerList.css";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const FollowerList = ({
    followers,
    following,
    setFollowerList,
    setFollowingList,
}) => {
    return (
        <div className="follower-list">
            {followers.length === 0 ? (
                <div>
                    <div
                        onClick={() => {
                            setFollowerList(false);
                            setFollowingList(false);
                        }}
                    >
                        <RxCross1 />
                    </div>

                    {following ? (
                        <span>No Following</span>
                    ) : (
                        <span>No Followers</span>
                    )}
                </div>
            ) : (
                <div>
                    <h3>
                        <div
                            onClick={() => {
                                setFollowerList(false);
                                setFollowingList(false);
                            }}
                        >
                            <RxCross1 />
                        </div>
                        {following ? (
                            <span>Following</span>
                        ) : (
                            <span>Followers</span>
                        )}
                        :
                    </h3>
                    {followers.map((follower) => (
                        <Link
                            to={`/profile/${follower._id}`}
                            className="container-1-1"
                        >
                            <div>
                                <img
                                    className="profile-pic"
                                    src={follower.avatarUrl}
                                    alt={follower.userName}
                                />
                            </div>
                            <div>
                                <div>
                                    {follower.firstName} {follower.lastName}
                                </div>
                                <div>@{follower.username}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FollowerList;
