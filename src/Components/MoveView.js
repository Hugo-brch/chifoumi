import React, { useState, useContext, useEffect } from "react";
import { MatchContext } from "../Contexts/MatchContext";
import { useNavigate } from "react-router-dom";


const MoveView = ({ currentTurn, setCurrentTurn  }) => {
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
					setMoveUser1("0");
					break;
				case "paper":
					setMoveUser1("[]");
					break;
				case "scissors":
					setMoveUser1(">8");
					break;
				default:
					setMoveUser1("");
			}

			switch (currentGame.turns[currentGame.turns.length - 1].user2) {
				case "rock":
					setMoveUser2("0");
					break;
				case "paper":
					setMoveUser2("[]");
					break;
				case "scissors":
					setMoveUser2(">8");
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
							<img alt="move user1" src={moveUser1} />
						</span>
						<h5 >{moveWinner !== undefined ? moveWinner : ""}</h5>
						<span >
							<img alt="move user2" src={moveUser2} />
						</span>
					</div>
					<span>
						<span >
							<button onClick={() => handleMove("rock")}>
								0
							</button>
							<h6>Pierre</h6>
						</span>
						<span>
							<button onClick={() => handleMove("paper")}>
								[]
							</button>
							<h6>Feuille</h6>
						</span>
						<span >
							<button onClick={() => handleMove("scissors")}>
								-8
							</button>
							<h6>Ciseaux</h6>
						</span>
					</span>
					
				</>
			)}
		</>
	);
};

export default MoveView;