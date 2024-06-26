import { createContext, ReactNode, useEffect, useReducer } from "react";
import { AuthContextProps } from "../dto/AuthContextProps.dto";
import { AuthState } from "../dto/AuthState.dto";
import { AuthAction } from "../dto/AuthAction.dto";



export const AuthContext = createContext<AuthContextProps>({
    user: null,
    dispatch: () => undefined,
});

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch(action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null};
        default:
            return state;
    }
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {user: null});

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            dispatch({type: 'LOGIN', payload: JSON.parse(user)});
        }
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}