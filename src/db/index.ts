import mongoose from "mongoose";

export const connectDB = async() =>{
    const connectionInstance = mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongodb connected successfully! DB Host: ${ connectionInstance}`)
}

