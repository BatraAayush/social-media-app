import React, { useState } from "react";
import "./EditBox.css";
import { usePostContext } from "../../contexts/PostProvider";

const EditBox = ({ post, setEditBox, setShowOptions }) => {
    const [inputValue, setInputValue] = useState(post.content);
    const [imgSrc, setImgSrc] = useState(post.mediaURL);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState("");
    const { editHandler } = usePostContext();
    const uploadImg = async() => {
        setUploading(true);
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "chitchatnew");
        data.append("cloud_name", "dbzcsalbk");
        data.append("folder", "chitchat/create-post");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dbzcsalbk/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        if (res.status === 200) {
            const { url } = await res.json();
            setImgSrc(url);
        }
        setUploading(false);
    }
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
            {uploading   && <div><strong>Uploading...</strong></div>}
            <input
                type="file"
                onChange={(e) => {
                    setImage(e.target.files[0]);
                }}
            />
            <button id="upload-btn" className="dark-btn" onClick={uploadImg}>Upload</button>
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
