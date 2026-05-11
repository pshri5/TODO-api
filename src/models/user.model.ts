import type { NextFunction } from "express";
import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema:Schema = new Schema({
    username:{
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps:true})


export const User = mongoose.model("User", userSchema)

userSchema.pre("save", async function (next:NextFunction) {
    if(!this.isModified("password")) return next()
    
    const hashedPassword = await bcrypt.hash(this.password, 10)
    
})