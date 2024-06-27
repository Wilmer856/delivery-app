import { Request, Response, response } from "express";
import { CreateUserDto } from "../dto/CreateUser.dto";
import User from "../models/UserModel";
import jwt from "jsonwebtoken";

const createToken = (_id: string) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

export const loginUser = async (req: Request<{},{},CreateUserDto>, res: Response) => {

    const { email, password} = req.body;

    try {
        const user = await User.login(email,password)

        const token = createToken(user._id as string)
        res.status(200).json({user})

    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}