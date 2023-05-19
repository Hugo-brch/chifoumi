import React, { useContext } from "react";
import { MatchContext } from "../Contexts/MatchContext";

const Fight = () => {
	const { partie } = useContext(MatchContext);
	return (
		<div>
			<span>
				<h3>
					{partie.user1.username ? partie.user1.username : "en recherche ..."}-
					VS -
					{partie.user2 !== null ? partie.user2.username : "en recherche ..."}
				</h3>
			</span>
			{partie.winner !== undefined ? 1:2}
		</div>
	);
};

export default Fight;