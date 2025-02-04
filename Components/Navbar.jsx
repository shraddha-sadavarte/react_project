import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../Styles/Navbar.css";

const Navbar = () => {
    const {user, logout} = useAuth();

    return (
        <nav className="navbar">
            <Link to="/">Dashboard</Link>
            {user ? (
                <>
                  <button onClick={logout}>Logout</button>
                </>
            ): (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
            )}
        </nav>
    )
}

export default Navbar;