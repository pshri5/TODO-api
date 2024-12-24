import { Task } from "../models/task.model";
import { asyncHandler } from "../utils/asyncHandler";
import {apiResponse} from "../utils/apiResponse"

//create task
export const createTask = asyncHandler(async(req,res)=>{
    const {content} = req.body
    if (!content) {
        throw new Error("Content is required")
    }

    const task = await Task.create({
        content,
        userId: req.user._id
    })

    return res.status(200).json(new apiResponse(200,task,"Task created Successfully"))

})
//get task
export const getTask = asyncHandler(async(req,res)=>{
    const {taskID} = req.params

    const task = await Task.findOne({
        _id: taskID,
        userId: req.user._id
    })
    if (!task) {
        throw new Error("Task not found")
    }
    return res.status(200).json(new apiResponse(200,task,"Task retrived successfully"))
})
//get all tasks
export const getAllTasks = asyncHandler(async(req,res)=>{
    const task = await Task.find({
        userId: req.user._id
    })

    return res.status(200).json(new apiResponse(200,task,"All tasks have been retrieved successfully"))
})
//update task
export const updateTask = asyncHandler(async(req,res)=>{
    const {taskID} = req.params
    const {content}= req.body
    const task = await Task.findOneAndUpdate({
        _id: taskID,
        userId: req.user._id
    },
    {
        $set:{
            content
        }

    },
    {
        new:true

    }
)
if (!task) {
    throw new Error("Task not found")
}
return res.status(200).json(new apiResponse(200,task,"Task updated successfully"))
})
//delete task
export const deleteTask = asyncHandler(async(req,res)=>{
    const {taskID} = req.params

    const task = await Task.findByIdAndDelete({
        _id: taskID,
        userId: req.user._id
    })

    if (!task) {
        throw new Error("Task not found")
    }
    return res.status(200).json(new apiResponse(200,{},"Task Deleted Successfully")
    )
})