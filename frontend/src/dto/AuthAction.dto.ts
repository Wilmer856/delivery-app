import { User } from "./User.dto";

export type AuthAction = 
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };