const express = require("express");
const router = express.Router();

const { generateQR, verifyOTP } = require("../controllers/mfaController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/generate", authMiddleware, generateQR);
router.post("/verify", authMiddleware, verifyOTP);

module.exports = router;