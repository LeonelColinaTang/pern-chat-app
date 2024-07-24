import express from 'express';
const router = express.Router();
import { login, logout, signup, getMe } from '../controllers/auth.controller.js';
import protectRoute from '../middleware/protectRoute.js';


router.get("/me", protectRoute, getMe);
router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);



 export default router;