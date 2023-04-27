import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../lib/constants";

export const AuthContext = createContext(
  localStorage.getItem("auth") || "light"
);

export default function AuthProvider({ children }) {
  /**
   * Gestion du auth
   */
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserFromToken(token);
    } else {
      setUser(false);
    }
  }, []);

  function setUserFromToken(token) {
    const payload = token.split(".")[1];
    setUser(JSON.parse(atob(payload)));
  }

  async function login(pseudo, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pseudo, password }),
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      setUserFromToken(data.accessToken);
    } else {
      throw new Error("Connexion impossible" + response.status);
    }
  }
  async function register(pseudo, email, password) {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pseudo, email, password }),
    });
    if (response.status === 201) {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      setUserFromToken(data.accessToken);
    } else {
      throw new Error("Création de compte impossible" + response.status);
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    setUser(false);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
