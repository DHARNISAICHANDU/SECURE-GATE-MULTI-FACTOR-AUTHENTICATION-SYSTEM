import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MatrixBackground from "../components/MatrixBackground";

function Login() {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post("http://localhost:5000/api/auth/login", {

                identifier,
                password

            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", identifier);

            alert("Login successful");

            navigate("/setup-mfa");

        }

        catch (error) {

            alert("Login failed");

        }

    };

    return (

        <div className="page-container">

            <MatrixBackground />

            <div className="auth-card">

                <h1>Secure Login 🔐</h1>

                <form onSubmit={handleLogin}>

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
                        Login
                    </button>

                </form>

                <p>Don't have an account?</p>

                <button onClick={() => navigate("/register")}>
                    Register
                </button>

            </div>

        </div>

    );

}

export default Login;