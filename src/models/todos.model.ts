import mongoose,{Schema} from "mongoose";


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
        enum:["Pending","In Progress","Completed"],
        default: "Pending"
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)