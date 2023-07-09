import React from "react";
import "./FollowerList.css";

const FollowerList = ({ followers, following }) => {
    return (
        <div className="follower-list">
            {followers.length === 0 ? (
                <div>
                    No{" "}
                    {following ? (
                        <span>Following</span>
                    ) : (
                        <span>Followers</span>
                    )}
                </div>
            ) : (
                <div>
                    <strong>
                        {following ? (
                            <span>Following</span>
                        ) : (
                            <span>Followers</span>
                        )}
                        :
                    </strong>
                    {followers.map((follower) => (
                        <div className="container-1">
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FollowerList;
