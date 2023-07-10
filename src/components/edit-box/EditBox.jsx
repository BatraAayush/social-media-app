import React, { useState } from "react";
import "./EditBox.css";
import { usePostContext } from "../../contexts/PostProvider";

const EditBox = ({ post, setEditBox, setShowOptions }) => {
    const [inputValue, setInputValue] = useState(post.content);
    const [imgSrc, setImgSrc] = useState(post.mediaURL);
    const { editHandler } = usePostContext();
    return (
        <div className="edit-box">
            <h2>Edit Post</h2>
            <input
                className="content"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            {imgSrc !== "" && <img src={imgSrc} alt="enter correct url"></img>}
            <label>Image Source: </label>
            <input
                type="text"
                value={imgSrc}
                onChange={(e) => {
                    setImgSrc(e.target.value);
                }}
            />
            <div className="buttons">
                <button
                    className="dark-btn"
                    onClick={() => {
                        editHandler(inputValue, imgSrc, post);
                        setInputValue(post.content);
                        setImgSrc(post.mediURL);
                        setEditBox(false);
                        setShowOptions(false);
                    }}
                >
                    Save
                </button>
                <button
                    className="dark-btn"
                    onClick={() => {
                        setInputValue(post.content);
                        setImgSrc(post.mediURL);
                        setEditBox(false);
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditBox;