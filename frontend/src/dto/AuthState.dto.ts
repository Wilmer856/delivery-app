import { User } from "./User.dto";

export interface AuthState {
    user: User | null;
}