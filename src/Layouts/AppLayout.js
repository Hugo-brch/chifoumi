import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, Outlet } from "react-router-dom";



export default function AppLayout() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar-desktop">
        <Link to="/">CHIFOU</Link>
        {user && <button text={"Se déconnecter"} onClick={logout}>Déconnexion </button>}
      </nav>
      <Outlet />
    </div>
  );
}