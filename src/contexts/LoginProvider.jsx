import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const LoginContext = createContext();

const loginReducer = (state, action) => {
    switch (action.type) {
        case "usernameInputHandler": {
            return { ...state, usernameInput: action.payload };
        }
        case "passwordInputHandler": {
            return { ...state, passwordInput: action.payload };
        }
        case "sLastNameInputHandler": {
            return { ...state, sLastNameInput: action.payload };
        }
        case "sNameInputHandler": {
            return { ...state, sNameInput: action.payload };
        }
        case "sPasswordInputHandler": {
            return { ...state, sPasswordInput: action.payload };
        }
        case "sConformpasswordInputHandler": {
            return { ...state, sConformPasswordInput: action.payload };
        }
        case "sUsernameInputHandler": {
            return { ...state, sUsernameInput: action.payload };
        }
        case "setLogin": {
            return { ...state, login: action.payload };
        }
        case "setUserDetails": {
            return { ...state, userDetails: action.payload };
        }
        default: {
            return { ...state };
        }
    }
};


export const LoginProvider = ({ children }) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(loginReducer, {
        userDetails: {},
        usernameInput: "",
        passwordInput: "",
        sNameInput: "",
        sLastNameInput: "",
        sPasswordInput: "",
        sConformPasswordInput: "",
        sUsernameInput: "",
        login: false,
    });

    const wrongDetailAlert = () => {
        toast("Incorrect Input");
    };
    const rightDetailAlert = () => {
        toast("Logged In");
    };
    const logOutAlert = () => {
        toast("Logged Out");
    };
    
    // const token = localStorage.getItem("encodedToken");
    // const userDetails = localStorage.getItem("userDetails");
    // useEffect(() => {
    //     if (token) {
    //         dispatch({ type: "setLogin", payload: true });
    //         dispatch({ type: "setUserDetails", payload: JSON.parse(userDetails) });
    //     }
    // },[])
    const usernameInputHandler = (e) => {
        dispatch({ type: "usernameInputHandler", payload: e.target.value });
    };

    const passwordInputHandler = (e) => {
        dispatch({ type: "passwordInputHandler", payload: e.target.value });
    };

    const fetchLoginDetails = async (type) => {
        try {
            let loginDetails = {};
            if (type === "test") {
                loginDetails = {
                    username: "aayushbatra",
                    password: "aayushbatra123",
                };
            } else {
                loginDetails = {
                    username: state.usernameInput,
                    password: state.passwordInput,
                };
            }
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(loginDetails),
            });
            if (res.status === 200) {
                dispatch({ type: "setLogin", payload: true });
                const { foundUser, encodedToken } = await res.json();
                localStorage.setItem("encodedToken", encodedToken);
                localStorage.setItem("userDetails", JSON.stringify(foundUser));
                dispatch({ type: "setUserDetails", payload: foundUser });
                rightDetailAlert();
                navigate("/");
            } else {
                wrongDetailAlert();
            }
        } catch (e) {
            console.log(e);
        }
    };

    const sNameInputHandler = (e) => {
        dispatch({ type: "sNameInputHandler", payload: e.target.value });
    };
    const sLastNameInputHandler = (e) => {
        dispatch({ type: "sLastNameInputHandler", payload: e.target.value });
    };
    const sPasswordInputHandler = (e) => {
        dispatch({ type: "sPasswordInputHandler", payload: e.target.value });
    };
    const sUsernameInputHandler = (e) => {
        dispatch({ type: "sUsernameInputHandler", payload: e.target.value });
    };
    const sConformPasswordInputHandler = (e) => {
        dispatch({
            type: "sConformpasswordInputHandler",
            payload: e.target.value,
        });
    };

    const fetchSignupDetails = async () => {
        try {
            if (
                state.sPasswordInput === state.sConformPasswordInput &&
                state.sNameInput !== "" &&
                state.sLastNameInput !== "" &&
                state.sPasswordInput !== "" &&
                state.sConformPasswordInput !== "" &&
                state.sUsernameInput !== ""
            ) {
                const signUpInputDetails = {
                    firstName: state.sNameInput,
                    lastName: state.sLastNameInput,
                    username: state.sUsernameInput,
                    password: state.sPasswordInput,
                };
                const res = await fetch("/api/auth/signup", {
                    method: "POST",
                    body: JSON.stringify(signUpInputDetails),
                });
                if (res.status === 201) {
                    const { createdUser, encodedToken } = await res.json();
                    localStorage.setItem("encodedToken", encodedToken);
                    dispatch({ type: "setUserDetails", payload: createdUser });
                    dispatch({ type: "setLogin", payload: true });
                    rightDetailAlert();
                    navigate("/");
                }
            } else wrongDetailAlert();
        } catch {}
    };

    const logoutHandler = () =>{
         dispatch({ type: "setLogin", payload: false });
         logOutAlert();
        };

    return (
        <LoginContext.Provider
            value={{
                usernameInputHandler,
                passwordInputHandler,
                fetchLoginDetails,
                sNameInputHandler,
                sLastNameInputHandler,
                sPasswordInputHandler,
                sUsernameInputHandler,
                sConformPasswordInputHandler,
                fetchSignupDetails,
                login: state.login,
                loginDetails: state.loginDetails,
                userDetails: state.userDetails,
                logoutHandler,
                dispatch
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => useContext(LoginContext);
