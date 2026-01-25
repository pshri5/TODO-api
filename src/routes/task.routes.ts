import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createTask,getTask,getAllTasks,updateTask,deleteTask } from "../controllers/task.controller.js";

const taskRouter = Router()

taskRouter.use(verifyJWT) 

taskRouter.route("/").post(createTask).get(getAllTasks)
taskRouter.route("/:taskID").get(getTask).patch(updateTask).delete(deleteTask)

export default taskRouter