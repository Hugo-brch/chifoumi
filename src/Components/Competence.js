import React, { useState, useContext, useEffect } from "react";
import { MatchContext } from "../Contexts/MatchContext";
import { useNavigate } from "react-router-dom";
import Pierre from "./PFS/Pierre";
import Ciseaux from "./PFS/Ciseaux";
import Feuille from "./PFS/Feuille";


const Competence = ({ currentTurn, setCurrentTurn  }) => {
	const [moveUser1, setMoveUser1] = useState();
	const [moveUser2, setMoveUser2] = useState();
	const [moveWinner, setMoveWinner] = useState();
	const { currentGame } = useContext(MatchContext);
	const { postMove, getGames } = useContext(MatchContext);
	const [text, setText] = useState("");

	async function handleMove(move) {
		postMove(move, currentTurn)
			.then(() => getGames())
			.catch((e) => console.error(e));
		setCurrentTurn(currentTurn + 1);
	}

	
	useEffect(() => {
		if (
			currentGame.turns.length > 0 &&
			currentGame.turns[currentTurn - 2] !== undefined &&
			currentGame.turns[currentTurn - 2].user2 !== undefined &&
			currentGame.turns[currentTurn - 2].user1 !== undefined
		) {
			switch (currentGame.turns[currentGame.turns.length - 1].user1) {
				case "rock":
					setMoveUser1(<Pierre/>);
					break;
				case "paper":
					setMoveUser1(<Ciseaux/>);
					break;
				case "scissors":
					setMoveUser1(<Feuille/>);
					break;
				default:
					setMoveUser1("");
			}

			switch (currentGame.turns[currentGame.turns.length - 1].user2) {
				case "rock":
					setMoveUser2(<Pierre/>);
					break;
				case "paper":
					setMoveUser2(<Ciseaux/>);
					break;
				case "scissors":
					setMoveUser2(<Feuille/>);
					break;
				default:
					setMoveUser2("");
			}

			switch (currentGame.turns[currentGame.turns.length - 1].winner) {
				case "user1":
					setMoveWinner(currentGame.user1.username + " Wins");
					break;
				case "user2":
					setMoveWinner(currentGame.user2.username + " Wins");
					break;
				case "draw":
					setMoveWinner("It's a draw");
					break;
				default:
					setMoveWinner("");
			}
		}

		if (currentGame.winner === null) {
			setText("It's a Draw");
		  } else if (currentGame.winner && currentGame.winner.username !== undefined) {
			setText(currentGame.winner.username + " is the winner");
		  } else {
			setText("It's a Draw");
		  }
	}, [currentTurn, currentGame, currentGame.winner]);
	const navigate = useNavigate();
	

	return (
		<>
			{currentGame.winner !== undefined ? (
				<span>
					<h3>{text}</h3>
					<button
						text="Quitter"
						onClick={() => navigate("/connexion")}
					>Quitter</button>
				</span>	
			) : (
				<>
					<div>
						<span>
							{moveUser1}
						</span>
						<h5 >{moveWinner !== undefined ? moveWinner : ""}</h5>
						<span >
							{moveUser2}
						</span>
					</div>
					<span>
						<span >
							<button  className="bn2" onClick={() => handleMove("rock")}>
								<Pierre/>
								<h3>Pierre</h3>
							</button>
						</span>
						<span>
							<button className="bn2" onClick={() => handleMove("scissors")}>
								<Ciseaux/>
								<h3>Ciseaux</h3>
							</button>
						</span>
						<span >
							<button className="bn2" onClick={() => handleMove("paper")}>
								<Feuille/>
								<h2>Feuille</h2>
							</button>
						</span>
					</span>
					
				</>
			)}
		</>
	);
};

export default Competence;