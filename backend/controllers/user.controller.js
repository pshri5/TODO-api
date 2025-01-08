import { asyncHandler } from "../utils/asyncHandler";
import { apiResponse } from "../utils/apiResponse";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//signup
export const signup = asyncHandler(async(req,res)=>{
   const {name,email,password} = req.body;
   if (!name || !email || !password) {
    throw new Error("Please provide all required fields")
   }

   const userExists = await User.findOne({email});
   if (userExists) {
    throw new Error("User already exists")
   }
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password,salt)
   const user = await User.create({
    name,
    email,
    password:hashedPassword
   })
   if (user) {
    res.status(201).json(new apiResponse(201,user,"Account created"))
   }
})
//login 
export const login = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if (!email || !password) {
        throw new Error("Please provide all required fields")
    }

    const user = await User.findOne({email})

    if (!user) {
        throw new Error("Invalid credentials")
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if (!isPasswordCorrect) {
        throw new Error("Invalid credentials")
    }
    const accessToken = jwt.sign({_id: user._id},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"15m"
    })
    const refreshToken = jwt.sign({_id:user._id},process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:"3d"
    })
    res.cookie("refreshToken",refreshToken,{
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000 //3days
    })

    res.status(200).json(new apiResponse(200,{
        _id:user._id,
        name:user.name,
        email:user.email,
        accessToken
    },"Login successful"))

})


