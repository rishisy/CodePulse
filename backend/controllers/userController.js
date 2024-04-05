

import asyncHandler from 'express-async-handler';
import User from '../models/userModels.js';
import generateToken from '../utils/generateToken.js';
// @desc Auth user and set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await user.matchPasswords(password)) {

        generateToken(res, user._id);
        res.status(201).json({

            _id: user._id,
            name: user.name,
            email: user.email,

        }
        );

    }
    else {
        res.status(401);
        throw new Error('Unauthorised Invalid Email Or Password ');
    }


});


// @desc register a new user
// route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {

    // data that is send by the reqest body like name email password
    console.log(req.body);
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {

        res.status(400);
        throw new Error("User already Exists");

    }

    const user = await User.create({
        name,
        email,
        password


    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({

            _id: user._id,
            name: user.name,
            email: user.email,

        }
        );

    }
    else {
        res.status(400);
        throw new Error('Invalid User Data');
    }


});


// @desc logout the user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)

    });
    res.status(200).json({ message: "Logged Out User" });

});




// @desc  get user profile
// route GET  /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {


    res.status(200).json({ message: "Show User Profile" });

});




// @desc update user profile
// route PUT  /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {

            user.password = req.body.password;


        }

        const updatedUser = await user.save();
        res.status(200).json({

            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,



        });

    }
    else {

        res.status(404);
        throw new Error("User not found");



    }
    res.status(200).json({ message: "Update the User Profile" });

});




export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile





};
