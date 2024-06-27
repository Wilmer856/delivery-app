import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import User from "../models/UserModel"
import { CreateUserDto } from "../dto/CreateUser.dto";

const requireAuth = async (req: Request<CreateUserDto>, res: Response, next: NextFunction) => {

    // verify authentication
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET as string) as {_id:string}
        const user = await User.findOne({_id}).select('_id')
        
        if(!user) {
            throw new Error()
        }

        req.user = user

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error:'Request is not authorized'})
    }
}