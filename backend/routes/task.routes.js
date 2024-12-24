import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware";
import { createTask,getTask,getAllTasks,updateTask,deleteTask } from "../controllers/task.controller";

const router = Router()

router.use(verifyJWT) //Protect all task routes

router.route("/").post(createTask).get(getAllTasks)
router.route("/:taskID").get(getTask).patch(updateTask).delete(deleteTask)

export default router