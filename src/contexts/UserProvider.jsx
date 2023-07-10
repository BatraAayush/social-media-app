import { toast } from "react-toastify";
import { useLoginContext } from "./LoginProvider";

const { createContext, useContext, useReducer } = require("react");

const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "setUsers": {
            return { ...state, users: action.payload };
        }
        case "setUser": {
            return { ...state, user: action.payload };
        }
        case "setFNameInput": {
            return { ...state, fNameInput: action.payload };
        }
        case "setLNameInput": {
            return { ...state, lNameInput: action.payload };
        }
        case "setBioInput": {
            return { ...state, bioInput: action.payload };
        }
        case "setUrlInput": {
            return { ...state, urlInput: action.payload };
        }
        case "setWebsiteInput": {
            return { ...state, websiteInput: action.payload };
        }
        case "setUserPosts": {
            return { ...state, userPosts: action.payload };
        }
        default: {
            return state;
        }
    }
};
export const UserProvider = ({ children }) => {
    const { dispatch: dispatchLogin } = useLoginContext();
    const [state, dispatch] = useReducer(userReducer, {
        users: [],
        user: {},
        fNameInput: "",
        lNameInput: "",
        bioInput: "",
        urlInput: "",
        websiteInput: "",
        userPosts: [],
    });

    const fetchUsers = async () => {
        try {
            const res = await fetch("/api/users");
            if (res.status === 200) {
                const { users } = await res.json();
                dispatch({ type: "setUsers", payload: users });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const setLNameInput = (e) => {
        dispatch({ type: "setLNameInput", payload: e });
    };
    const setBioInput = (e) => {
        dispatch({ type: "setBioInput", payload: e });
    };
    const setWebsiteInput = (e) => {
        dispatch({ type: "setWebsiteInput", payload: e });
    };
    const setUrlInput = (e) => {
        dispatch({ type: "setUrlInput", payload: e });
    };
    const setFNameInput = (e) => {
        dispatch({ type: "setFNameInput", payload: e });
    };
    const getUser = async (id) => {
        try {
            const res = await fetch(`/api/users/${id}`);
            if (res.status === 200) {
                const { user } = await res.json();
                dispatch({ type: "setUser", payload: user });
            }
        } catch (e) {
            console.log(e);
        }
    };
    const editUserAlert = () => {
        toast(`User Details edited`);
    }
    const editProfileHandler = async (newUserDetails) => {
        try {
            console.log(newUserDetails);
            const res = await fetch(`/api/users/edit`, {
                method: "POST",
                body: JSON.stringify({
                    userData: newUserDetails,
                }),
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
            });
            if (res.status === 201) {
                const { user } = await res.json();
                dispatch({ type: "setUser", payload: user });
                dispatchLogin({ type: "setUserDetails", payload: user });
                editUserAlert()
            }
        } catch (e) {
            console.log(e);
        }
    };
    const followAlert = (name) => {
        toast(`Followed ${name}`);
    }
    const unfollowAlert = (name) => {
        toast(`Unfollowed ${name}`);
    }
    const followHandler = async (id) => {
        try {
            const res = await fetch(`/api/users/follow/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify({}),
            });
            if (res.status === 200) {
                const response = await res.json();
                const { user, followUser } = response;
                dispatchLogin({ type: "setUserDetails", payload: user });
                dispatch({ type: "setUser", payload: followUser });
                followAlert(followUser.username);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const unFollowHandler = async (id) => {
        try {
            const res = await fetch(`/api/users/unfollow/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify({}),
            });
            if (res.status === 200) {
                const response = await res.json();
                const { user, followUser } = response;
                dispatch({ type: "setUser", payload: followUser });
                dispatchLogin({ type: "setUserDetails", payload: user });
                unfollowAlert(followUser.username)
            }
        } catch (e) {
            console.log(e);
        }
    };
    const getUserPosts = async (userName) => {
        try {
            const response = await fetch(`/api/posts/user/${userName}`);
            const {posts} = await response.json();
            if (response.status === 200) {
                dispatch({ type: "setUserPosts", payload: posts });
            }
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <UserContext.Provider
            value={{
                users: state.users,
                user: state.user,
                setFNameInput,
                setLNameInput,
                setBioInput,
                setUrlInput,
                setWebsiteInput,
                getUser,
                fetchUsers,
                editProfileHandler,
                fNameInput: state.fNameInput,
                lNameInput: state.lNameInput,
                bioInput: state.bioInput,
                urlInput: state.urlInput,
                websiteInput: state.websiteInput,
                followHandler,
                unFollowHandler,
                getUserPosts,
                userPosts: state.userPosts,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
