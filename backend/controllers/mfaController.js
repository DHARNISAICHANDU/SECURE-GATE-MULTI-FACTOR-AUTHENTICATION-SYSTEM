const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const User = require("../models/User");

/* =============================
   GENERATE QR
============================= */

exports.generateQR = async (req, res) => {

    try {

        const userId = req.user.id;

        const secret = speakeasy.generateSecret({
            length: 20,
            name: "SecureGate"
        });

        const qr = await QRCode.toDataURL(secret.otpauth_url);

        const user = await User.findById(userId);

        user.mfaSecret = secret.base32;

        await user.save();

        res.json({
            qr: qr
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "QR generation failed"
        });

    }

};


/* =============================
   VERIFY OTP
============================= */

exports.verifyOTP = async (req, res) => {

    try {

        const userId = req.user.id;

        const { token } = req.body;

        const user = await User.findById(userId);

        const verified = speakeasy.totp.verify({

            secret: user.mfaSecret,

            encoding: "base32",

            token: token,

            window: 2

        });

        if (!verified) {

            return res.status(400).json({
                message: "Invalid OTP"
            });

        }

        user.mfaEnabled = true;

        await user.save();

        res.json({
            message: "MFA Enabled Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "OTP verification failed"
        });

    }

};