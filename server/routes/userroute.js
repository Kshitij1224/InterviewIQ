import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getCurrentUser } from "../controllers/usercontroller.js"

const userRouter = express.Router()

userRouter.get("/current-user", isAuth, getCurrentUser)

export default userRouter