import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

function Dashboard() {

    return (

        <div>

            <Navbar />

            <div className="dashboard">

                <div className="dashboard-card">

                    <h2>Security Status</h2>

                    <p>MFA Authentication Successful</p>

                </div>

                <div className="dashboard-card">

                    <h2>Account Protection</h2>

                    <p>2-Factor Authentication Enabled</p>

                </div>

                <div className="dashboard-card">

                    <h2>Session</h2>

                    <p>Secure Session Active</p>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;