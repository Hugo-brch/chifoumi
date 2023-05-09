import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Form() {
  const { register, login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  function handleRegister(e) {
    e.preventDefault();
    const data = Object.values(Object.fromEntries(new FormData(e.target)));
    register(...data).catch((err) => {
      setError(err.message);
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    const data = Object.values(Object.fromEntries(new FormData(e.target)));
    login(...data).catch((err) => {
      setError(err.message);
    });
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
