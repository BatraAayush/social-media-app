import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import { RequiresAuth } from "./components/RequiresAuth";
import Post from "./pages/post/Post";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element=<RequiresAuth><Home /></RequiresAuth> />
                <Route path="/bookmarks" element=
                <RequiresAuth><Bookmarks /></RequiresAuth> />
                <Route path="/explore" element=<RequiresAuth><Explore /></RequiresAuth> />
                <Route path="/login" element=<Login /> />
                <Route path="/signup" element=<Signup /> />
                <Route path="/profile/:profileId" element=<RequiresAuth><Profile /></RequiresAuth> />
                <Route path="/post/:postId" element=<RequiresAuth><Post/></RequiresAuth>/>
            </Routes>
        </div>
    );
}

export default App;
