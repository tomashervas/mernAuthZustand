import { AuthRequest } from '../interfaces';
import { Router } from "express";
import { login, profile } from ".././controllers/auth";
import { requireAuth } from "../middlewares/auth";

const router = Router();

router.post('/login', login)

router.get('/profile', requireAuth, profile )

export default router;