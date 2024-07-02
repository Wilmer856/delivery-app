import { CreateUserDto } from "./dto/CreateUser.dto";


declare module 'express' {
    interface Request {
      user?: CreateUserDto;
    }
}