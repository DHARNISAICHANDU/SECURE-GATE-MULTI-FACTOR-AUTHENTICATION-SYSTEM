import React, { useState } from "react";
import MatrixBackground from "../components/MatrixBackground";
import { useNavigate } from "react-router-dom";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

function Dashboard() {

    const navigate = useNavigate();

    const [activeCard, setActiveCard] = useState(null);
    const [lightMode, setLightMode] = useState(false);

    /* GET USERNAME */

    const username = localStorage.getItem("username");

    const toggleTheme = () => {
        setLightMode(!lightMode);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "User Logins",
                data: [2, 4, 3, 6, 5, 7, 4],
                borderColor: "#60a5fa",
                backgroundColor: "rgba(96,165,250,0.3)",
                tension: 0.4,
                fill: true
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                labels: { color: lightMode ? "black" : "white" }
            }
        },
        scales: {
            x: {
                ticks: { color: lightMode ? "black" : "white" }
            },
            y: {
                ticks: { color: lightMode ? "black" : "white" }
            }
        }
    };

    return (

        <div className={`dashboard-page ${lightMode ? "light-mode" : ""}`}>

            <MatrixBackground />

            <div className="dashboard-wrapper">

                {/* HEADER */}

                <div className="dashboard-header">

                    <div>
                        <h1>SecureGate MFA</h1>
                        <p style={{ color: "#93c5fd" }}>Welcome, {username}</p>
                    </div>

                    <div>

                        <button onClick={toggleTheme}>
                            {lightMode ? "Dark Mode" : "Light Mode"}
                        </button>

                        <button onClick={logout}>
                            Logout
                        </button>

                    </div>

                </div>


                {/* CARDS */}

                <div className="dashboard-cards">

                    <div className="dashboard-card" onClick={() => setActiveCard("security")}>
                        <h2>Security Status</h2>
                        <p>Click to view details</p>
                    </div>

                    <div className="dashboard-card" onClick={() => setActiveCard("protection")}>
                        <h2>Account Protection</h2>
                        <p>Click to view details</p>
                    </div>

                    <div className="dashboard-card" onClick={() => setActiveCard("session")}>
                        <h2>Session</h2>
                        <p>Click to view details</p>
                    </div>

                </div>


                {/* INFO PANEL */}

                {activeCard === "security" && (
                    <div className="info-panel">
                        <h2>Security Status</h2>
                        <p>✔ MFA Enabled</p>
                        <p>✔ OTP authentication active</p>
                    </div>
                )}

                {activeCard === "protection" && (
                    <div className="info-panel">
                        <h2>Account Protection</h2>
                        <p>✔ Password encrypted</p>
                        <p>✔ MFA active</p>
                    </div>
                )}

                {activeCard === "session" && (
                    <div className="info-panel">
                        <h2>Session Info</h2>
                        <p>Device: Chrome</p>
                        <p>Status: Active</p>
                    </div>
                )}


                {/* GRAPH */}

                <div className="graph-box">

                    <h2>Login Analytics</h2>

                    <Line data={data} options={options} />

                </div>


                {/* ACTIVITY */}

                <div className="activity-box">

                    <h2>Recent Login Activity</h2>

                    <ul>
                        <li>Login detected - Chrome - India</li>
                        <li>MFA verification successful</li>
                        <li>Secure session started</li>
                    </ul>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;