import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MatrixBackground from "../components/MatrixBackground";

function Register() {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/api/auth/register", {

                identifier,
                password

            });

            alert("Registration successful");

            navigate("/login");

        }
        catch (err) {

            alert("Registration failed");

        }

    };

    return (

        <div className="page-container">

            <MatrixBackground />

            <div className="auth-card">

                <h1>Create Account</h1>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Username / Email / Phone"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p>Already have an account?</p>

                <button onClick={() => navigate("/login")}>
                    Login
                </button>

            </div>

        </div>

    );

}

export default Register;