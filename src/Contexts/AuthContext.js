import { createContext, useEffect, useState } from "react";

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

  async function login(email, password) {
    const response = await fetch("http://fauques.freeboxos.fr:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      setUserFromToken(data.accessToken);
    } else {
      throw new Error("login faild " + response.status);
    }
  }
  async function register(surname, name, email, password) {
    const response = await fetch("http://fauques.freeboxos.fr:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ surname, name, email, password }),
    });
    if (response.status === 201) {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      setUserFromToken(data.accessToken);
    } else {
      throw new Error("login faild " + response.status);
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
