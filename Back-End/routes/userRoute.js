import express from 'express'
import {singup,login,loggedInUser,logout } from '../controllers/user.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const userRoute = express.Router()



userRoute.post('/signup',singup)
userRoute.post('/login',login)
userRoute.get('/logged',authenticate,loggedInUser)
userRoute.post('/logout',logout)

export default userRoute;