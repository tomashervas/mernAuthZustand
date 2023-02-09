import { AuthRequest } from './../../interfaces';
import { Router } from "express";
import { login } from ".././controllers/auth";
import { requireAuth } from "../middlewares/auth";

const router = Router();

router.post('/login', login)

router.get('/profile', requireAuth, (req: AuthRequest, res) => {
    res.status(200).json({
        user: req.user,
    })
})

export default router;