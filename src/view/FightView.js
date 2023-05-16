/*import React, { useContext, useEffect, useState } from "react";
import { JeuxContext } from "../contexts/JeuxContext";
import Jeu from "../components/Jeu";*/
import Fight from "../Components/Fight";

const FightView = () => {
	/*const { getPartie, partie } = useContext(JeuxContext);
	const [tour, setTour] = useState(1);

	useEffect(() => {
		getPartie();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tour]);

	if (partie) {
		return (
			<div>
				<Versus />
				<Jeu tour={tour} setTour={setTour} />
			</div>
		);
	} else {
		return <></>;
	}
    */return(
    <>
        Fight
        <Fight/>
    </>
    );
};
export default FightView; 