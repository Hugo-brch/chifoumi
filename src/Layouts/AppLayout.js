import React, { useContext, useEffect, useCallback } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { MatchContext } from "../Contexts/MatchContext";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  const { user, logout } = useContext(AuthContext);
  const { getGames, currentGame } = useContext(MatchContext);

  const memoizedGetGames = useCallback(() => {
    getGames();
  }, [getGames]);

  useEffect(() => {
    memoizedGetGames();
  }, [memoizedGetGames]);

  return (
    <div>
      <nav className="navbar-desktop">
        <Link to="/">CHIFOU</Link>
        {user && currentGame && (
          <h2>{currentGame.user1?.username || "en attente ..."}</h2>
        )}
        {user && <button text={"Se déconnecter"} onClick={logout}>Déconnexion</button>}
      </nav>
      <Outlet />
    </div>
  );
}