import React, { useContext, } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, Outlet } from "react-router-dom";
import  useLocalStorage  from "react-use-localstorage";

export default function AppLayout() {
  const { user, logout } = useContext(AuthContext);
  const [username] = useLocalStorage("username", "");

  return (
    <div className="AppLayout">
      <nav className="navbar-desktop">
        <Link to="/">CHIFOU</Link>
        {user && <h2>{username}</h2>}
        {user && <button text={"Se déconnecter"} onClick={logout}>Déconnexion</button>}
      </nav>
      <Outlet />
    </div>
  );
}