const { userModel } = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const validator = require("validator")


// login user 
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success:false,message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// resgister user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // checking if user exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false,message:"User Already Exists"})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"Invalid Email format"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong password (>8 characters)"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(11)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

module.exports = {loginUser,registerUser}