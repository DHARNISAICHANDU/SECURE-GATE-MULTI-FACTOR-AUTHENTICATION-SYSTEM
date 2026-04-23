require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const mfaRoutes = require("./routes/mfa");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MFA Authentication Server Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/mfa", mfaRoutes);
app.use("/api/user", userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});