
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
/*import Login from "../components/identify/Login";
import Register from "../components/identify/Register";*/

export default function Identify() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toRegister, setToRegister] = useState(false);

  useEffect(() => {
    if (user !== false) return navigate("/matches");
  }, [user, navigate]);

  if (user !== false) return <></>;

  return (
    <div>
     <div>
      <div className="form">
        {toRegister === false && 
        <><h3>Entrée</h3>
        <Login /> 
        <p>Jamais jouer <span onClick={() => setToRegister(true)}>Nouveau joueur</span></p>
        </>
        }
        {toRegister === true && 
        <><h3>Nouveau joueur</h3>
        <Register /> 
        <p>Joueur <span onClick={() => setToRegister(false)}>Entrée</span></p>
        </>
        }
        
      </div>
     </div>
    </div>
  );
}
