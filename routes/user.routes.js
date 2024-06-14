
import express from 'express';
import { signUpvalidate } from '../middlewares/signupValidate.js';
import { createuser, loginUser } from '../controllers/users.js';
import { loginValidate } from '../middlewares/loginValidate.js';

const router = express.Router();




router.post('/signup',signUpvalidate,createuser)

router.post('/login',loginValidate,loginUser)


export default router