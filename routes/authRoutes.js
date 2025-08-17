const express = require("express");
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//auth routes

router.post( "/register", registerUser );
router.post( "/login", loginUser );
router.get( "/profile", protect, getUserProfile );  //getting user date protected by jtw
router.put( "/profile", protect, updateUserProfile ); //updating user date protected by jtw

module.exports = router;