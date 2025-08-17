const task = require("../models/Task");
const user = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc get all users (admin only)
// @route GET /api/users/
// @access Private admin

const getUsers = async (req, res) => {
    try{
        const users = await user.find({ role: 'member'}).select("-password");

        //add task counts to each user
        const usersWithTaskCounts = await Promise.all(users.map(async (users) => {
            const pendingTask = await task.countDocuments({ assignedTo: user._id, status: "Pending"});
            const inProgressTasks = await task.countDocuments({ assignedTo: user._id, status: "In Progress"});
            const completedTasks = await task.countDocuments({ assignedTo: user._id, status: "Completed"});

            return {
                ...user._doc, //include all existing user data
                pendingTasks,
                inProgressTasks,
                completedTasks,

            };
        }));
    } catch(error) {
        res.status(500).json({message: "server error", error: error.message});
    }
};

// @desc get user by id
// @route GET /api/users/:id
// @access Private 

const getUserById = async (req, res) => {
try{
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found"});
    res.json(user);
    
    } catch(error) {
        res.status(500).json({message: "server error", error: error.message});
    }
};

// @desc delete a user (admin only)
// @route DELETE /api/users/:id
// @access Private admin
const deleteUser = async (req, res) => {
try{

    } catch(error) {
        res.status(500).json({message: "server error", error: error.message});
    }
};

module.exports = { getUsers, getUserById, deleteUser};