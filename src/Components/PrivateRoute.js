import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (user === false)
      return navigate("/security", {
        state: {
          to: pathname,
        },
      });
  }, [user, pathname, navigate]);

  // eslint-disable-next-line eqeqeq
  if (user == false) return <></>;
  return children;
}
