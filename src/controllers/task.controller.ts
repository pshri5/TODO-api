import type { Request, Response } from "express";
import { Todo } from "../models/todos.model.ts";

//get todo
const getTodos = async(req:Request,res:Response):Promise<void> =>{
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
const getTodo = async(req:Request,res:Response):Promise<void> =>{
try {
    
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
    /*
     1. User validation
     2. creating a new todo
     3. saving it on db
    */
   

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
    
} catch (error) {
    res.status(500).json({
        success: false,
        message: "Error deleting todo"
    })
}
}
