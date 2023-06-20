import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Explore from "./pages/explore/Explore";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element=<Home /> />
                <Route path="/bookmarks" element=<Bookmarks /> />
                <Route path="/explore" element=<Explore /> />
                <Route path="/login" element=<Login /> />
                <Route path="/signup" element=<Signup /> />
                <Route path="/profile" element=<Profile /> />
            </Routes>
        </div>
    );
}

export default App;
