const mongoose = require("mongoose");

// Existing user schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

const User = mongoose.model("User", userSchema);

const periodTrackingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    cycleDuration: { type: Number },
    lastPeriodStart: { type: Date },
    lastPeriodDuration: { type: Number },
    moodTypes: [{ type: String }],
    moodSeverity: { type: String },
    moodDate: { type: Date },
    symptoms: [{ type: String }],
    symptomSeverities: { type: Map, of: String },
    symptomDate: { type: Date },
    sleepDuration: { type: Number },
    sleepQuality: { type: String },
    nextPeriodPrediction: { type: Date }
}, { timestamps: true });

const PeriodTracking = mongoose.model("PeriodTracking", periodTrackingSchema);

module.exports = { User, PeriodTracking };