import React, {useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/search/Search";
import "./Post.css";
import PostCard from "../../components/postCard/PostCard";
import { useParams } from "react-router";
import { usePostContext } from "../../contexts/PostProvider";

const Post = () => {
    const { postId } = useParams();
    const {getPost, post} = usePostContext();
    useEffect(() => {
      getPost(postId);
    },[])
    return (
        <div className="main-layout">
            <Navigation />
            <div className="post">
                <h2>Post</h2>
                <PostCard post={post} details/>
            </div>
            <Search />
        </div>
    );
};

export default Post;
