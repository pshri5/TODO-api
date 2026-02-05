import type { Request, Response } from "express";
import { Todo } from "../models/todos.model.ts";
import type { TodoResponse, ITodoDocument, Itodo } from "../types/todo.ts";

//get todo
const getAllTodos = async(req:Request,res:Response):Promise<void> =>{
    try {
       const todo = await Todo.find()
       res.status(200).json({
        success: true,
        data: todo,
        message: "Todos fetched successfully"
       }) 
    } catch (error) {
       res.status(500).json({
        success: false,
        data: null,
        message:"Error fetching todos"
       }) 
    }
}
const getTodo = async(req:Request<{id : String }>,res:Response):Promise<void> =>{
try {
    const todo  = await Todo.findById(req.params.id)
    res.status(200).json({
        success: true,
        data: todo,
        message: "Todo retrieved successfully"
    })
} catch (error) {
    res.status(500).json({
        success: false,
        data: null,
        message:"Error fetching todo"
    })
}
}
//create todo
const createTodo = async(req:Request,res:Response):Promise<void> =>{
try {
    const newTodo = await Todo.create(req.body)
    res.status(200).json({
        success: true,
        data: newTodo,
        message: "Todo created successfully",
    })
   

} catch (error) {
    res.status(500).json({
        success: false,
        data: null,
        message: "Error creating todo"
    })
}
}
//update todo
const updateTodo = async(req:Request,res:Response):Promise<void> =>{
try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    })
    res.status(200).json({
        success: true,
        data: updatedTodo,
        message:"Todo updated successfully"
    })

    
} catch (error) {
    res.status(500).json({
        success: false,
        message: "Error updating todo"
    })
}
}
//delete todo
const deleteTodo = async(req:Request,res:Response): Promise<void> =>{
try {
   const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
   res.status(200).json({
    success: true,
    data: null,
    message:"Todo deleted successfully"
   }) 
} catch (error) {
    res.status(500).json({
        success: false,
        message: "Error deleting todo"
    })
}
}
