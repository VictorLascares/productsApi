import { Router } from "express";
import { logIn, register } from "../controllers/auth.controller";
const router = Router();

router
    .route('/register')
    .post(register)

router 
    .route('/login')
    .post(logIn)


export default router;