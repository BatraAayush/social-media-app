import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
import { useLoginContext } from "./LoginProvider";
import { toast } from "react-toastify";

const PostContext = createContext();

const postReducer = (state, action) => {
    switch (action.type) {
        case "setPosts": {
            return { ...state, posts: action.payload };
        }
        case "setPost": {
            return { ...state, post: action.payload };
        }
        case "setPostsLoading": {
            return { ...state, postsLoading: action.payload };
        }
        case "setPostLoading": {
            return { ...state, postLoading: action.payload };
        }
        case "setFilterBy": {
            if (action.payload === "latest") {
                const updatedPosts = state.homePosts.slice().sort((a, b) => {
                    const postDateA = new Date(a.createdAt);
                    const postDateB = new Date(b.createdAt);
                    return postDateB.getTime() - postDateA.getTime();
                });
                return {
                    ...state,
                    homePosts: updatedPosts,
                    filterBy: action.payload,
                };
            } else if (action.payload === "trending") {
                const updatedPosts = state.homePosts.slice().sort((a, b) => {
                    return b.likes.likeCount - a.likes.likeCount;
                });
                return {
                    ...state,
                    homePosts: updatedPosts,
                    filterBy: action.payload,
                };
            }

            break;
        }
        case "imageInputHandler": {
            return { ...state, imageInput: action.payload };
        }
        case "textInputHandler": {
            return { ...state, textInput: action.payload };
        }
        case "setHomePosts": {
            const userDetails = action.payload;
            const usernameOfFollowings = action.payload?.following?.map(
                ({ username }) => username
            );
            const postsOfFollowing = state?.posts?.filter((post) =>
                usernameOfFollowings?.includes(post?.username)
            );
            const myPosts = state?.posts?.filter(
                (post) => post?.username === userDetails?.username
            );
            const homePosts = [...myPosts, ...postsOfFollowing];
            return { ...state, homePosts: homePosts };
        }
        case "setBookmarks": {
            return { ...state, bookmarks: action.payload };
        }
        case "fileInputHandler": {
            return { ...state, fileInput: action.payload };
        }
        case "setUploading": {
            return { ...state, uploading: action.payload };
        }
        default:
            return state;
    }
};
export const PostProvider = ({ children }) => {
    const createdPostAlert = () => {
        toast("Created Post");
    };
    const { userDetails } = useLoginContext();
    const [state, dispatch] = useReducer(postReducer, {
        posts: [],
        post: {},
        homePosts: [],
        filterBy: "latest",
        imageInput: false,
        textInput: "",
        liked: false,
        bookmarks: [],
        postsLoading: true,
        postLoading: true,
        fileInput: "",
        uploading: false,
    });

    const fetchPostsData = async () => {
        try {
            const res = await fetch("/api/posts", {
                method: "GET",
            });
            if (res.status === 200) {
                const { posts } = await res.json();
                dispatch({ type: "setPosts", payload: posts });
                setTimeout(() => {
                    dispatch({ type: "setPostsLoading", payload: false });
                }, 2000);
            }
        } catch (e) {
            console.log(e);
            dispatch({ type: "setPostsLoading", payload: false });
        } finally {
        }
    };

    const getHomePosts = () => {
        dispatch({ type: "setHomePosts", payload: userDetails });
        dispatch({ type: "setFilterBy", payload: "latest" });
    };
    useEffect(() => {
        fetchPostsData();
    }, [userDetails]);

    const likeHandler = async (id) => {
        try {
            const res = await fetch(`/api/posts/like/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
            });
            if (res.status === 201) {
                const { posts } = await res.json();
                dispatch({ type: "setPosts", payload: posts });
                // dispatch({ type: "setHomePosts", payload: userDetails });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const dislikeHandler = async (id) => {
        try {
            const res = await fetch(`/api/posts/dislike/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
            });
            if (res.status === 201) {
                const { posts } = await res.json();
                dispatch({ type: "setPosts", payload: posts });
            }
        } catch (e) {
            console.log(e);
        }
    };
    const setFilterBy = (filter) => {
        dispatch({ type: "setFilterBy", payload: filter });
    };

    const textInputHandler = (e) => {
        dispatch({ type: "textInputHandler", payload: e.target.value });
    };

    const fileInputHandler = (e) => {
        dispatch({ type: "fileInputHandler", payload: e.target.files[0] });
    };
    const handleSubmit = async () => {
        dispatch({ type: "setUploading", payload: true });
        const data = new FormData();
        data.append("file", state.fileInput);
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
            dispatch({ type: "imageInputHandler", payload: url });
        }
        dispatch({ type: "setUploading", payload: false });
    };

    const createPost = async () => {
        try {
            const postData = {
                _id: uuid(),
                content: state.textInput,
                mediaURL: state.imageInput,
                likes: {
                    likeCount: 0,
                    likedBy: [],
                    dislikedBy: [],
                },
                comments: [],
                username: userDetails.username,
                createdAt: formatDate(),
                updatedAt: formatDate(),
                follow: true,
            };
            const res = await fetch(`/api/posts`, {
                method: "POST",
                body: JSON.stringify({ postData }),
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
            });

            if (res.status === 201) {
                const { posts } = await res.json();
                dispatch({ type: "setPosts", payload: posts });
                dispatch({ type: "setFilterBy", payload: "latest" });

                createdPostAlert();
            }
            dispatch({ type: "imageInputHandler", payload: false });
            dispatch({ type: "textInputHandler", payload: "" });
        } catch (e) {
            console.log(e);
        }
    };
    const getPost = async (id) => {
        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: "GET",
            });
            if (res.status === 200) {
                const { post } = await res.json();
                dispatch({ type: "setPost", payload: post });
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch({ type: "setPostLoading", payload: false });
        }
    };
    const deleteHandler = async (id) => {
        const res = await fetch(`/api/posts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `${localStorage.getItem("encodedToken")}`,
            },
        });
        if (res.status === 201) {
            const { posts } = await res.json();
            dispatch({ type: "setPosts", payload: posts });
            dispatch({ type: "setFilterBy", payload: "latest" });
        }
    };
    const editPostAlert = () => {
        toast(`Post Edited`);
    };
    const editHandler = async (input, src, post) => {
        try {
            const postData = { ...post, content: input, mediaURL: src };
            const res = await fetch(`/api/posts/edit/${post._id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify({ postData }),
            });
            if (res.status === 201) {
                const { posts } = await res.json();
                dispatch({ type: "setPosts", payload: posts });
                dispatch({ type: "setFilterBy", payload: "latest" });
                editPostAlert();
            }
            dispatch({ type: "imageInputHandler", payload: false });
        } catch (e) {
            console.log(e);
        }
    };
    const bookmarkAlert = () => {
        toast(`Post Bookmarked`);
    };
    const unbookmarkAlert = () => {
        toast(`Post Unbookmarked`);
    };
    const bookmarkHandler = async (id) => {
        try {
            const res = await fetch(`/api/users/bookmark/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify({}),
            });
            if (res.status === 200) {
                const { bookmarks } = await res.json();
                const bookmarkedPosts = state.posts.filter(({ _id }) =>
                    bookmarks.includes(_id)
                );
                dispatch({ type: "setBookmarks", payload: bookmarkedPosts });
                bookmarkAlert();
            }
        } catch (e) {
            console.log(e);
        }
    };
    const unBookmarkHandler = async (id) => {
        try {
            const res = await fetch(`/api/users/remove-bookmark/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify({}),
            });
            if (res.status === 200) {
                const { bookmarks } = await res.json();
                const bookmarkedPosts = state.posts.filter(({ _id }) =>
                    bookmarks.includes(_id)
                );
                dispatch({ type: "setBookmarks", payload: bookmarkedPosts });
                unbookmarkAlert();
            }
        } catch (e) {
            console.log(e);
        }
    };
    const getBookmarkedPosts = async () => {
        try {
            const res = await fetch(`/api/users/bookmark/`, {
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
            });
            if (res.status === 200) {
                const { bookmarks } = await res.json();
                const bookmarkedPosts = state.posts.filter(({ _id }) =>
                    bookmarks.includes(_id)
                );
                dispatch({ type: "setBookmarks", payload: bookmarkedPosts });
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                post: state.post,
                setFilterBy,
                filterBy: state.filterBy,
                textInputHandler,
                createPost,
                deleteHandler,
                editHandler,
                getPost,
                dislikeHandler,
                likeHandler,
                homePosts: state.homePosts,
                getHomePosts,
                bookmarkHandler,
                unBookmarkHandler,
                bookmarks: state.bookmarks,
                getBookmarkedPosts,
                postsLoading: state.postsLoading,
                postLoading: state.postLoading,
                fileInputHandler,
                handleSubmit,
                imageInput: state.imageInput,
                textInput: state.textInput,
                uploading: state.uploading,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => useContext(PostContext);
