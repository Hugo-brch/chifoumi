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
				case "scissors":
					setMoveUser1(<Ciseaux/>);
					break;
				case "paper":
					setMoveUser1(<Feuille/>);
					break;
				default:
					setMoveUser1("");
			}

			switch (currentGame.turns[currentGame.turns.length - 1].user2) {
				case "rock":
					setMoveUser2(<Pierre/>);
					break;
				case "scissors":
					setMoveUser2(<Ciseaux/>);
					break;
				case "paper":
					setMoveUser2(<Feuille/>);
					break;
				default:
					setMoveUser2("");
			}

			switch (currentGame.turns[currentGame.turns.length - 1].winner) {
				case "user1":
				  setTimeout(() => {
					setMoveWinner(<span className="MoveWinner1"> {currentGame.user1.username} Gagne </span>);
				  }, 3000);
				  break;
				case "user2":
				  setTimeout(() => {
					setMoveWinner(<span className="MoveWinner2"> {currentGame.user2.username} Gagne </span>);
				  }, 3000); 
				  break;
				case "draw":
				  setTimeout(() => {
					setMoveWinner("égalité");
				  }, 3000);
				  break;
				default:
				  setMoveWinner("");
			}
		}

		if (currentGame.winner === null) {
			setText("C'est une égalité!");
		  } else if (currentGame.winner && currentGame.winner.username !== undefined) {
			setText(
				<span>
      				VAINQUEUR <br /> {currentGame.winner.username}
    			</span>);
		  } else {
			setText("C'est une égalité!");
		  }
	}, [currentTurn, currentGame, currentGame.winner]);
	const navigate = useNavigate();
	

	return (
		<>
			{currentGame.winner !== undefined ? (
				<span className="Winner">
					<h3>{text}</h3>
					<button className="bn2" onClick={() => navigate("/connexion")}>Quitter</button>
				</span>	
			) : (
				<>
					<div className="Move">
						<span className="moveUser">
							{moveUser1}
						</span>
						<h5>{moveWinner !== undefined ? moveWinner : ""}</h5>
						<span className="moveUser" >
							{moveUser2}
						</span>
					</div>
					<span className="compétence">
						<span >
							<button  className="bn2 PFS" onClick={() => handleMove("rock")}>
								<Pierre/>
								<h2>Pierre</h2>
							</button>
						</span>
						<span>
							<button className="bn2 PFS" onClick={() => handleMove("scissors")}>
								<Ciseaux/>
								<h2>Ciseaux</h2>
							</button>
						</span>
						<span >
							<button className="bn2 PFS" onClick={() => handleMove("paper")}>
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