import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    return (
        <div className="reg-container">
            <div>
                <h1>Register Page</h1>
            </div>

            <div className="reg-inputs">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="name here.." />
                <label htmlFor="">Number</label>
                <input type="number" placeholder="number here.." />
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder="email here.." />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password here.." />

                <div className="reg-btn">
                    <Link to="/Login">
                        <button className="regiter-btn">Register</button>
                    </Link>
                    <Link to="/Login"><button>Login</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
