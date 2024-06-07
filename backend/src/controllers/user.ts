import { Request, Response, response } from "express";
import { CreateUserDto } from "../dto/CreateUser.dto";

export function getUsers(req: Request, res: Response){
    res.send([]);
}

export function getUserById(req: Request, res: Response){
    res.send({});
}

export function createUser(req: Request<{},{}, CreateUserDto>, res: Response){
    
}