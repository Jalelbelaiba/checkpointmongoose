const express = require("express");
const router = express.Router();

const User = require("../models/userSchema"); // Fixed require path

router.post("/creatUser", async (req, res) => {
    try { 
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ msg: "user created", user: user }); // Fixed JSON structure
    } catch (error) {
        res.status(500).json({ msg: error.message }); // Fixed JSON structure and error handling
    }
});

router.get("/getUser", async (req, res) => {
    try { 
        const user =  User(req.body);
        
        res.status(201).json({ msg: "user found", user: user }); // Fixed JSON structure
    } catch (error) {
        res.status(500).json({ msg: error.message }); // Fixed JSON structure and error handling
    }
});

module.exports = router;

