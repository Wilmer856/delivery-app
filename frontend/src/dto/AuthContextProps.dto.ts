import { Dispatch} from 'react';
import { AuthAction } from "./AuthAction.dto";
import { AuthState } from "./AuthState.dto";

export interface AuthContextProps extends AuthState {
    dispatch: Dispatch<AuthAction>;
}