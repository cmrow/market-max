import User from '../model/User.js';
import asyncHandler from 'express-async-handler'
import bcrypt from "bcryptjs"
import generateToken from '../utils/generateToken.js';
import getTokenFromHeader from '../utils/getTokenFromHeader.js';
import { verifyToken } from '../utils/verifyToken.js';

// @desc Register user
// @route POST /api/v1/users/register
// @acces Private/Admin

export const registerUserController = asyncHandler(async (req, res) => {
    const { fullname, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {

        throw new Error("User already Exist");
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    // create the user
    const user = await User.create({
        fullname,
        email,
        password: hashedPassword,
    })
    res.status(201).json({
        status: 'success',
        message: 'User create successfuly',
        data: user
    })
});

// @desc Login user
// @route POST /api/v1/users/login
// @access Public
export const loginUserController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //find the user in db by email only
    const userFound = await User.findOne({ email });
    if (userFound && bcrypt.compare(password, await userFound?.password)) {
        res.json({
            status: "Login success",
            message: "User login successfuly",
            userFound,
            token: generateToken(userFound?._id),
        })
    } else {
        throw new Error("Invalid login credentials")

    }

});

// @desc Get user profile
// @route POST /api/v1/users/profile
// @access Private
export const getUserProfileController = asyncHandler(async (req, res) => {
    //find the user

    const user = await User.findById(req.userAuthID).populate("orders");
    console.log(req.userAuthID);

    res.json({
        status: "success",
        message: "User profile fetched successfully",
        user,
    });
});

// @desc Put user profile
// @route PUT /api/v1/users/update/shipping
// @access Private
export const updateShippingAddressController = asyncHandler(async (req, res) => {
    const { firstName, lastName, address, city, postalCode, province, country, phone } = req.body;
    const user = await User.findByIdAndUpdate(req.userAuthID, {
        shippingAddress: {
            firstName, lastName, address, city, postalCode, province, country, phone
        },
        hasShippingAddress: true
    },
        {
            new: true

        }
    );
    res.json({
        status: "success",
        message: "User shipping address updated successfuly",
        user
    });

});


