import { createContext , useState} from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null)

    const Login = (newToken) => {
        setToken(newToken)
        setIsAuth(true)
    }
    // if(token !== null){
    // }

    const Logout = () => {
        setIsAuth(false)
        setToken(null)
    }

    console.log(token)

    return (
        <AuthContext.Provider value={{isAuth, Login, Logout, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider