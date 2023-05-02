import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <h1>Home Page</h1>
           <Link to="/Login"><button>Log Out</button></Link> 
        </div>
    );
}

export default Home;
