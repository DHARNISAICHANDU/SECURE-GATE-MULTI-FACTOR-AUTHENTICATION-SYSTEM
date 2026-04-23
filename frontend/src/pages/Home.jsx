import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="home">

            <h1 className="home-title">
                Secure Gate 🔐
            </h1>

            <p className="home-subtitle">
                Advanced Multi-Factor Authentication System
            </p>

            <div className="home-buttons">

                <button onClick={() => navigate("/login")}>
                    Login
                </button>

                <button onClick={() => navigate("/register")}>
                    Register
                </button>

            </div>

        </div>

    );

}

export default Home;