import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(token);
    } else {
      setUser(false);
    }
  }, []);

  async function login(username, password) {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 200) {
      const data = await response.json();
      setUser({ token: data.token, username: data.username }); // Ajouter le nom d'utilisateur à l'objet user
      localStorage.setItem("token", data.token);
      console.log("Successfully Login");
    } else {
      throw new Error("Login failed:", response.status);
    }
  }

  async function register(username, password) {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 201) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log("Successfully Register");
      login(data.username, data.password);
      navigate("/play");
    } else {
      throw new Error("Registration failed:");
    }
  }

  async function logout() {
    setUser(false);
    localStorage.removeItem("token");
    console.log("Successfully logout");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}