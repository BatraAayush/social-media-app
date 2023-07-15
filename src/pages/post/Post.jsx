import React, {useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/search/Search";
import "./Post.css";
import PostCard from "../../components/postCard/PostCard";
import { useParams } from "react-router";
import { usePostContext } from "../../contexts/PostProvider";
import Spinner from "../../components/spinner/Spinner";

const Post = () => {
    const { postId } = useParams();
    const {getPost, post, postLoading, posts} = usePostContext();
    useEffect(() => {
      getPost(postId);
    },[posts])
    return (
        <div className="main-layout">
            <Navigation />
            <div className="post">
                <h2>Post</h2>
                <PostCard post={post} details/>
            </div>
            <Search />
            {(postLoading) && (
                <div className="loading-div">  
                    <Spinner className="spinner" />
                </div>
            )}
        </div>
    );
};

export default Post;
