
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
            <h1>Bienvenue!</h1>
			<p>Dans le monde de Chifou, des Champions légendaires s'affrontent dans des dojos lors de grands combats de chifoumi. <br/>Ces affrontements captivent le pays tout entier, car ils sont à la fois un spectacle passionnant et un moyen de résoudre les différends.<br/> Les champions, symboles de sagesse et de Force, inspirent à embrasser les valeurs du chifoumi transmi depuis des années.</p>
			<button className="bn632-hover bn18" onClick={Rejoindre}>Entrée dans l'arène</button>
		</div>
	);
};

export default GameView;