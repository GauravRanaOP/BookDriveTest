const g2data = require("../models/G2PersonalInfo.js");
const path = require("path");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    try {
        const { username, password, confirmpassword, userType } = req.body;
        
        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).send("Passwords do not match");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await g2data.create({
            username: username,
            password: hashedPassword,
            userType: userType
        });

        res.redirect("/login");
    } catch (error) {
        console.error(error);

        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            req.flash('validationErrors',validationErrors)
            return res.redirect("/register");
        }

        res.status(500).send("Internal Server Error");
    }
};
