import React, {createContext,useState, useContext} from "react"
import axios from "axios"

const AuthContext = createContext();  //create a context, allows components to access authentication related data withou props

export const AuthProvider = ({children}) => {  //authprovide -> context provider manage authentication state
const [user,setUser]=useState(null);  //initialize user state to null

const login = async(credentials)=>{
    const response=await axios.post("/api/auth/login", credentials);
    setUser(response.data.user);
};

const signup = async(credentials) => {
    const response = await axios.post("api/auth/signup",credentials);
    setUser(response.data.user);
};

const logout = async () =>{
    await axios.post("api/auth/logout");
    setUser(null);
};

return(
   // this will provide the user,login,signup and logout functions with all components wrapped inside <AuthProvider></AuthProvider>
    <AuthContext.Provider value={{ user, login, signup, logout }}>
        {children} 
    </AuthContext.Provider> //children represents the wrapped componentss(login,signup,dashboard)
);
};

//This is a custom hook that allows any component to easily access authentication functions by calling useAuth(), instead of using useContext(AuthContext) manually.
export const useAuth = () => useContext(AuthContext);