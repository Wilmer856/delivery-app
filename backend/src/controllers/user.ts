import { Request, Response, response } from "express";
import { CreateUserDto } from "../dto/CreateUser.dto";
import User from "../models/UserModel";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../middleware/requireAuth";

const createToken = (_id: string) => {
    return jwt.sign({_id}, process.env.SECRET as string, {expiresIn: '3d'})
}

export const loginUser = async (req: Request<{},{},CreateUserDto>, res: Response) => {

    const { email, password} = req.body;

    try {
        const user = await User.login(email,password)

        const token = createToken(user._id as string)
        res.status(200).json({id: user._id, name: user.name, email: user.email, role: user.role, token });

    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const getUsers = async (req: Request<AuthRequest>, res: Response) => {

    try {
        const users = await User.find({role:"driver"});
        res.status(200).json(users)

    } catch(error: any) {
        res.status(400).json({error: error.message})
    }

}