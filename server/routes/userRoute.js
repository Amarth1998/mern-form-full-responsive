import express from 'express'
import { userRegisterController ,userLoginController} from '../controllers/userController.js'
const router =express.Router()

//Resgister 
router.post('/register',userRegisterController)
router.post('/login',userLoginController)


export default router