import express from 'express'
// import { isAdmin, requireSignIn } from '../middlewares/authmiddleware.js'

import { userRegisterController ,userLoginController} from '../controllers/userController.js'
const router =express.Router()

//Resgister 
router.post('/register',userRegisterController)
router.post('/login',userLoginController)


export default router