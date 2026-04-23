const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        sparse: true
    },

    email: {
        type: String,
        unique: true,
        sparse: true
    },

    phone: {
        type: String,
        unique: true,
        sparse: true
    },

    password: {
        type: String,
        required: true
    },

    mfaSecret: String,

    mfaEnabled: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model("User", userSchema);