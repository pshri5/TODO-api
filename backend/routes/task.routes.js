import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import { createTask,getTask,getAllTasks,updateTask,deleteTask } from "../controllers/task.controller";

const taskRouter = Router()

taskRouter.use(verifyJWT) //Protect all task routes

taskRouter.route("/").post(createTask).get(getAllTasks)
taskRouter.route("/:taskID").get(getTask).patch(updateTask).delete(deleteTask)

export default taskRouter