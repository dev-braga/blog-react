import { Routes, Route } from "react-router-dom";
import Login from "../login/Login.jsx";
import Register from "../login/Register.jsx";
import ProtectRoute from "../../services/ProtectRoute.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={ <Login />} />
            <Route 
                path="/register" 
                element={ 
                    <ProtectRoute>
                        <Register />
                    </ProtectRoute>
                } />
        </Routes>
    )
}

export default App;
