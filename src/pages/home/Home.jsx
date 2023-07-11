import { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import PostCard from "../../components/postCard/PostCard";
import Search from "../../components/search/Search";
import { usePostContext } from "../../contexts/PostProvider";
import "./Home.css";
import { VscSettings } from "react-icons/vsc";
import { BiTrendingUp } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
    let { homePosts, getHomePosts, posts, postsLoading } = usePostContext();
    const {
        setFilterBy,
        filterBy,
        textInputHandler,
        imageInputHandler,
        createPost,
    } = usePostContext();
    const [filterDialogue, setFilterDialogue] = useState(false);
    useEffect(() => {
        getHomePosts();
    }, [posts]);
    return (
        <div className="main-layout">
            <Navigation />
            <div className="home">
                <h2>Home</h2>
                <div className="create-post">
                    <input
                        onChange={(e) => textInputHandler(e)}
                        className="text-input"
                        placeholder="Whats happening...?"
                        type="text"
                    />
                    <div className="container-2">
                        <input
                            onChange={(e) => imageInputHandler(e)}
                            placeholder="image url"
                            type="text"
                        />
                        <button className="dark-btn" onClick={createPost}>
                            Post
                        </button>
                    </div>
                </div>
                <div className="container-1">
                    <h3>{filterBy} Posts</h3>
                    <VscSettings
                        onClick={() => setFilterDialogue(!filterDialogue)}
                        className="filter-btn"
                    />
                    {filterDialogue && (
                        <div className="filter-box">
                            <div
                                className="sort-div"
                                style={{
                                    color:
                                        filterBy === "trending"
                                            ? "rgb(29, 155, 240)"
                                            : "#0f1419",
                                }}
                                onClick={() => setFilterBy("trending")}
                            >
                                <BiTrendingUp /> Trending
                            </div>
                            <div
                                className="sort-div"
                                style={{
                                    color:
                                        filterBy === "latest"
                                            ? "rgb(29, 155, 240)"
                                            : "#0f1419",
                                }}
                                onClick={() => setFilterBy("latest")}
                            >
                                <BiTimeFive /> Latest
                            </div>
                        </div>
                    )}
                </div>
                {
                    homePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            <Search />
            {(postsLoading) && (
                <div className="loading-div">  
                    <Spinner className="spinner" />
                </div>
            )}
        </div>
    );
};

export default Home;
