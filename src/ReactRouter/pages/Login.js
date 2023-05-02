import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <h1>Welcome To Login</h1>

            <div className="inputs">
                <label htmlFor="">User Name</label>
                <input type="text" placeholder="user name.." />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password.." />
                <Link to="/Home">
                    <button>Login</button>
                </Link>
                <Link to="/">
                        <button className="regiter-btn">Register</button>
                    </Link>
            </div>
        </div>
    );
}

export default Login;
