
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
		// eslint-disable-next-line eqeqeq
		if (user != false) return navigate("/play");
	}, [user, navigate]);

  function handleLogin(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    login(data.username, data.password)
      .then(() => {
        console.log("Succefully login");
        navigate("/play");
      })
      .catch((e) => console.error("Login failed", e.message));
  }

  function handleRegister(event) {
    event.preventDefault();
    const data = Object.values(
      Object.fromEntries(new FormData(event.currentTarget))
    );
    register(...data)
      .then(() => {
        console.log("Succefully registered");
        navigate("/play");
      })
      .catch((e) => console.error("Registration error", e.message));
  }

  return (
    <div className="Connexion">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" name="username" required />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" name="password" required />

        <button type="submit">Se connecter</button>
      </form>

      <h2>S'inscrire</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" name="username" required />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" name="password" required />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
