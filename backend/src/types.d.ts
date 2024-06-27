import { CreateUserDto } from "./dto/CreateUser.dto";


declare module 'express-serve-static-core' {
    interface Request {
      user?: CreateUserDto;
    }
}