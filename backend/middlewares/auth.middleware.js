import {asyncHandler} from "../utils/asyncHandler"
import jwt from "jsonwebtoken"
import {User} from "../models/user.model"

export const verifyJWT = asyncHandler(async(req,res,next)=>{
    try {
        const token = req.token?.accessToken || req.header("Authorization");
        if (!token) {
            throw new Error("Unauthorized Request: Token Missing")
        }
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password")
        
        if (!user) {
            throw new Error("Invalid Access Token")
        }

        req.user = user;
        next();


    } catch (error) {
        throw new error("Invalid Access Token")
    }
})
