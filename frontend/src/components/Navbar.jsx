import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {

    const navigate = useNavigate();

    const [light, setLight] = useState(false);

    const toggleMode = () => {

        document.body.classList.toggle("light-mode");

        setLight(!light);

    };

    const logout = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <div className="navbar">

            <h3>SecureGate MFA</h3>

            <div>

                <button onClick={toggleMode}>
                    {light ? "Dark Mode" : "Light Mode"}
                </button>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;