import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function PrivateRoutes({ children }) {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (user === false) return navigate("/login");
	}, [user, pathname, navigate]);

	// eslint-disable-next-line eqeqeq
	if (user == false) return <></>;
	return children;
}
