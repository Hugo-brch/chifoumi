import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const { user, register, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
		// eslint-disable-next-line eqeqeq
		if (user != false) return navigate("/connexion");
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
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input type="text" name="username" text="username" placeholder="username" />
        <input type="password" name="password" text="password" placeholder="Password" />
        <input type="submit" value="s'inscrire"/>
      </form>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" name="username" text="username" placeholder="username" />
        <input type="password" name="password" text="password" placeholder="Password" />
        <input type="submit" value="se connecter"/>
      </form>
    </div>
  );
}
