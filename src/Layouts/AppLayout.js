import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, Outlet } from "react-router-dom";



export default function AppLayout() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar-desktop">
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/matches">Jouer</Link>
        {!user && <Link to="/Connexion">Connexion</Link>}
        </div>
        {user && <button text={"Se déconnecter"} onClick={logout}/>}
      </nav>
      <Outlet />
    </div>
  );
}