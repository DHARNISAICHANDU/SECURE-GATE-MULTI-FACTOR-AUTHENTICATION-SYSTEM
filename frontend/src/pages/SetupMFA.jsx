import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MatrixBackground from "../components/MatrixBackground";

function SetupMFA() {

    const [qr, setQr] = useState("");
    const [otp, setOtp] = useState("");

    const navigate = useNavigate();

    const generateQR = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await axios.post(
                "http://localhost:5000/api/mfa/generate",

                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setQr(res.data.qr);

        }

        catch (err) {

            alert("Error generating QR");

        }

    };

    const verifyOTP = async () => {

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/api/mfa/verify",

                { token: otp },

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("MFA enabled");

            navigate("/dashboard");

        }

        catch (err) {

            alert("OTP verification failed");

        }

    };

    return (

        <div className="page-container">

            <MatrixBackground />

            <div className="auth-card">

                <h1>MFA Setup</h1>

                <p>Scan this QR with Google Authenticator</p>

                <button onClick={generateQR}>
                    Generate QR Code
                </button>

                {qr &&

                    <div>

                        <img
                            src={qr}
                            alt="QR"
                            style={{ width: "200px", marginTop: "20px" }}
                        />

                        <p>Enter OTP</p>

                        <input
                            type="text"
                            placeholder="6 digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        <button onClick={verifyOTP}>
                            Verify OTP
                        </button>

                    </div>

                }

            </div>

        </div>

    );

}

export default SetupMFA;