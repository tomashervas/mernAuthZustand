import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../interfaces";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // try {
    //     const user = await User.findOne({ email });
    //     if (!user) {
    //         return res.status(400).json({ message: 'User not found' });
    //     }
    //     const isMatch = await bcrypt.compare(password, user.password);
    // }
    // catch (err) {
    //     console.log(err)
    // }

    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secret', {
        expiresIn: "1h",
    })

    res.status(200).json({
        token,
        user: {
            email,
        },
    })
}

export const profile = (req: AuthRequest, res: Response) => {
    res.status(200).json({
        user: req.user,
    })
}