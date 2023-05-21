
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import useLocalStorage  from "react-use-localstorage";

export default function Connexion() {
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [username, setUsername] = useLocalStorage("username", "");

  useEffect(() => {
    if (user !== false) return navigate("/play");
  }, [user, navigate]);

  function handleLogin(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    login(data.username, data.password)
      .then(() => {
        console.log("Successfully login");
        setUsername(data.username); // Store username in local storage
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
        console.log("Successfully registered");
        setUsername(data[0]); // Store username in local storage
        navigate("/play");
      })
      .catch((e) => console.error("Registration error", e.message));
  }

  return (
    <div className="Connexion">
      <span className="Login">
        <h2>Se connecter</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input type="text" name="username" required />
          <br/>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" name="password" required />
          <br/>
          <button className="bn2" type="submit">Se connecter</button>
        </form>
      </span>
      <span className="Register">
        <h2>S'inscrire</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input type="text" name="username" required />
          <br/>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" name="password" required />
          <br/>
          <button className="bn2" type="submit">S'inscrire</button>
        </form>
      </span>
    </div>
  );
}

