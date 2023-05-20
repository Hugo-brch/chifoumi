
import React, { useContext } from "react";
import { MatchContext } from "../Contexts/MatchContext";
import { useNavigate } from "react-router-dom";

const GameView = () => {
	const { postGames, getGames } = useContext(MatchContext);
	const navigate = useNavigate();

	function Rejoindre() {
        getGames();
		postGames()
			.then(() => navigate("/fight"))
			.catch((e) => {
				console.log(e);
				navigate("/fight");
				window.alert("You already have a match, waiting for an opponent");
			});
			console.log(Rejoindre)
	}

	return (
		<div className="Dojo">
            Bienvenue!
			<button onClick={Rejoindre}>Entrée dans l'arène</button>
		</div>
	);
};

export default GameView;