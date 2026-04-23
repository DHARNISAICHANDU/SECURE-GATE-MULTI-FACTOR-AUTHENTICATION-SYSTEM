import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import SetupMFA from "./pages/SetupMFA";
import VerifyOTP from "./pages/VerifyOTP";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setup-mfa" element={<SetupMFA />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App;