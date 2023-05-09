
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";

export default function Connexion() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== false) return navigate("/matches");
  }, [user, navigate]);

  if (user !== false) return <></>;

  return (
    <div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}
