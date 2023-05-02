import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";


function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="/" element={<Register />} />
            </Routes>
        </div>
    );
}

export default MainRouter;
