import React, {useState} from "react";
import { useAuth } from "../Context/AuthContext";
import "../Styles/Auth.css"

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login( {email,password} );
    }

    return (
        <>
          <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
          </div>
        </>
    )
}

export default Login;