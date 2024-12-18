const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const { User, PeriodTracking } = require("../src/Sarwar/models");

const app = express();
app.use(express.json());

app.use(cors())

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/signup", async(req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "please fill all the fields"});
    }

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "email already exists"});
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password: hashedpassword});

        await newUser.save();
        res.status(201).json({message: "You have signed up successfully"});
    }catch(error){
        console.log("Error while signing you up", error);
        res.status(500).json({message: "Error during signup"});
    }
});

app.post("/trackerdata", async (req, res) => {
    const { userId, ...trackerData } = req.body;

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newPeriodTracking = new PeriodTracking({
            user: user._id,
            ...trackerData
        });

        await newPeriodTracking.save();
        console.log("Tracker data submitted:", newPeriodTracking);
        res.status(201).json({ message: "Period tracking data saved successfully" });
    } catch (error) {
        console.error("Error saving period tracking data:", error);
        res.status(500).json({ message: "Error saving period tracking data", error: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
        console.log("Missing email or password");
        return res.status(400).json({ message: "Please provide both email and password." });
    }
  
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("No user found with this email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }
        console.log("User found:", user);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("Password mismatch for email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        console.log("Login successful for email:", email);
        return res.status(200).json({ 
            message: "You have logged in successfully",
            userId: user._id 
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});


app.get("/periodtracking/:userId", async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    try {
        const periodTrackingData = await PeriodTracking.findOne({ user: userId }).sort({ date: -1 });
        if (!periodTrackingData) {
            return res.status(404).json({ message: "No period tracking data found for this user" });
        }

        res.status(200).json(periodTrackingData);
    } catch (error) {
        console.error("Error fetching period tracking data:", error);
        res.status(500).json({ message: "Error fetching period tracking data", error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

