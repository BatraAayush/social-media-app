import React, { useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/search/Search";
import "./Bookmarks.css";
import { usePostContext } from "../../contexts/PostProvider";
import PostCard from "../../components/postCard/PostCard";
import { useLoginContext } from "../../contexts/LoginProvider";

const Bookmarks = () => {
    const { getBookmarkedPosts, bookmarks, posts } = usePostContext();
    useEffect(() => {
        getBookmarkedPosts();
    }, []);
    return (
        <div className="main-layout">
            <Navigation />
            <div className="bookmarks">
                <h2>Bookmarks</h2>
                {bookmarks.length === 0 ? (
                    <div>No Bookmarks</div>
                ) : (
                    <div>
                        {bookmarks.map((post) => (
                            <PostCard post={post} />
                        ))}
                    </div>
                )}
            </div>
            <Search />
        </div>
    );
};

export default Bookmarks;
