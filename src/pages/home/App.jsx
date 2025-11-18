import { Routes, Route } from "react-router-dom";
import Login from "../login/Login.jsx";
import Register from "../register/Register.jsx";
import Posts from "../Posts/Posts.jsx";


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
        </Routes>
    )
}

export default App;
