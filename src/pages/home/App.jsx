import { Routes, Route } from "react-router-dom";
import Login from "../login/Login.jsx";
import Register from "../register/Register.jsx";
import ProtectRoute from "../../services/ProtectRoute.jsx";
import Posts from "../Posts/Posts.jsx";
import CreatePosts from "../Posts/CreatePosts.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={ <Login />} />
            <Route 
                path="/register" 
                element={ <Register />} />
            <Route
                path="/posts"
                element={ <Posts />}
            />
            <Route
                path="/posts/create"
                element={
                    <CreatePosts />
                }
            />
        </Routes>
    )
}

export default App;
