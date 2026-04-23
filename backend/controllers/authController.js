const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================

exports.register = async (req, res) => {

    const { identifier, password } = req.body;

    try {

        let query = {};

        // detect identifier type
        if (identifier.includes("@")) {
            query.email = identifier;
        }
        else if (!isNaN(identifier)) {
            query.phone = identifier;
        }
        else {
            query.username = identifier;
        }

        // check if user already exists
        const existingUser = await User.findOne(query);

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = new User({
            ...query,
            password: hashedPassword
        });

        await user.save();

        res.json({ message: "User registered successfully" });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Registration failed" });

    }

};


// ================= LOGIN =================

exports.login = async (req, res) => {

    const { identifier, password } = req.body;

    try {

        const user = await User.findOne({
            $or: [
                { username: identifier },
                { email: identifier },
                { phone: identifier }
            ]
        });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Login failed" });

    }

};