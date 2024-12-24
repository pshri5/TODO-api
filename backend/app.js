import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import taskRouter from "./routes/task.routes"

const app =express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)
app.use(cookieParser())
app.use(express.json({limit:"16kb" }))
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use("/api/v1/tasks", taskRouter)




export {app}