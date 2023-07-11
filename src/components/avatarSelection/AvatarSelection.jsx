import React, { useEffect, useState } from "react";
import "./AvatarSelection.css";
import { useUserContext } from "../../contexts/UserProvider";

const AvatarSelection = () => {
    const {selectedAvatar, handleAvatarSelect} = useUserContext();
    const avatars = [
        "https://i.ibb.co/ThD89vB/a-5.png",
        "https://i.ibb.co/6vPXC0t/a-8.png",
        "https://i.ibb.co/FYpysM2/a-1.png",
        "https://i.ibb.co/5vMSJ3V/a-2.png",
        "https://i.ibb.co/zSZ6JkK/a-3.png",
        "https://i.ibb.co/5LYbtp8/a-7.png"
    ];
    return (
        <div className="field">
            <label id="center">Select Avatar</label>
            <span className="avatars">
                {avatars.map((avatar, index) => (
                    <img
                        key={index}
                        src={`${avatar}`}
                        alt={`Avatar ${index + 1}`}
                        className={selectedAvatar === avatar ? "selected" : ""}
                        onClick={() => handleAvatarSelect(avatar)}
                    />
                ))}
            </span>
        </div>
    );
};

export default AvatarSelection;
