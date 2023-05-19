import { createContext, useState } from "react";

export const MatchContext = createContext();

export default function MatchProvider({ children }) {
	const [games, setGames] = useState();
	const [currentGame, setCurrentGame] = useState();

	async function getGames() {
		const response = await fetch("/matches", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.status === 200) {
			const data = await response.json();
			setGames(data);
			setCurrentGame(data[data.length - 1]);
		}
	}

	async function postGames() {
		const response = await fetch("/matches", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.status === 201) {
			getGames();
		} else {
			throw new Error("Joining matche failed:" + response);
		}
		console.log(postGames)
	}

	async function postMove(move, currentTurn) {
		const response = await fetch(
			`/matches/${currentGame._id}/turns/${currentTurn}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ move: `${move}` }),
			}
		);
		if (response.status === 202) {
			getGames();
		} else {
			const data = await response.json();
			throw new Error("Can't post move: " + JSON.stringify(data));
		}
	}

	return (
		<MatchContext.Provider
			value={{
				getGames,
				games,
				currentGame,
				setGames,
				postGames,
				postMove,
			}}
		>
			{children}
		</MatchContext.Provider>
	);
}