import React, { useContext, useEffect, useState } from "react";
import { MatchContext } from "../Contexts/MatchContext";
import Competence from "../Components/Competence";


const FightView = () => {
	const { getGames, currentGame } = useContext(MatchContext);
	const [currentTurn, setCurrentTurn] = useState(1);
	
	useEffect(() => {
		getGames();
		const intervalId = setInterval(() => {
			getGames();
			if (currentGame && currentGame.user2 !== null) {
				clearInterval(intervalId);
			}
			return () => clearInterval(intervalId);
		}, 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTurn]);

	if (currentGame) {
		return (
			<div className="Fight">
				<span>
					<h2>
						{currentGame.user1.username
							? currentGame.user1.username
							: "en attente ..."}
					</h2>
					<h3>vs</h3>
					<h2 className="text-2xl">
						{currentGame.user2 !== null
							? currentGame.user2.username
							: "en attente ..."}
					</h2>
				</span>
				{currentGame !== undefined ? (
					<Competence currentTurn={currentTurn} setCurrentTurn={setCurrentTurn}/>
				) : (
					<></>
				)}
			</div>
		);
	} else {
		return <></>;
	}
};

export default FightView;