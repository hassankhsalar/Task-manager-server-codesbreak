const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { exportTaskReport, exportUsersReport } = require("../controllers/reportController");

const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTaskReport); //export all tasks as excel/pdf format
router.get("/export/users", protect, adminOnly, exportUsersReport); //export user task report

module.exports = router;