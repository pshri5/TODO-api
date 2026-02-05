import mongoose,{Schema} from "mongoose";
import { TodoStatus } from "../types/todo.ts";


const todoSchema:Schema = new Schema({
    title:{
        type: String,
        required: [true,"Title is required"],
        trim: true
    },
    description:{
        type: String,
        required: [true,"Description is required"],
        trim: true
    },
    status:{
        type: String,
        required: [true,"Status is required"],
        enum: Object.values(TodoStatus),
        default: TodoStatus.PENDING
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)