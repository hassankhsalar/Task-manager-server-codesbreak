requestAnimationFrame("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
//middleware for handling cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE",],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

//middleware
app.use(express.json());

///Routes

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/reports", reportRoutes);


//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
