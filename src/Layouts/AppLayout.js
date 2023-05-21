import React, { useContext, } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, Outlet } from "react-router-dom";
import  useLocalStorage  from "react-use-localstorage";
import Logo from "../Images/ChiLogo.webp"

export default function AppLayout() {
  const { user, logout } = useContext(AuthContext);
  const [username] = useLocalStorage("username", "");

  return (
    <div className="AppLayout">
      <nav className="navbar-desktop">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="user">
          {user && <h2>{username}</h2>}
          {user && <button className="bn3-hover bn31" onClick={logout}>Déconnexion</button>}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}