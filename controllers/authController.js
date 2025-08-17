const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//jwt generation
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "6h" });
};

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Login user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }};

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private (required jwt)
const getUserProfile = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }};

// @desc update user profile
// @route PUT /api/auth/profile
// @access Private (required jwt)
const updateUserProfile = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }};

module.exports = {registerUser, loginUser, getUserProfile, updateUserProfile};
