import React,{useState} from "react";
import { useAuth } from "../Context/AuthContext";
import "../Styles/Auth.css"

const Signup = () => {
     const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        const {signup} = useAuth();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            await signup( {email,password} );
        }

        return(
            <div className="auth-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Signup</button>
                </form>
            </div>
        )
}

export default Signup;