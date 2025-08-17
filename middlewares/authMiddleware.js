const jwt = require("jsonwebtoken");
const User = require("../models/User");

//middleware protecting routes
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; //splitting the token by space and selecting the second array content of the string
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401).json({ message: "not authorized,no token" });
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "token failed", error: error.message });
  }
};

//middleware for admin only
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied, Admin personnel only" });
  }
};

module.exports = { protect, adminOnly };
