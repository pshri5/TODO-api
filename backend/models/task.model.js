import mongoose,{Schema} from "mongoose";
import { User } from "./user.model";

const taskSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref: User
        
    },
    content:{
        type: String,
        required: true,
    }
},{timestamps:true})

export const Task = mongoose.model("Task",taskSchema)