import Connexion from "./View/ConnexionView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";
import AppLayout from "./Layouts/AppLayout";
import Home from "./View/Home";
import PrivateRoutes from "./Components/PrivateRoute";
import GameView from "./View/GameView";
import FightView from "./View/FightView";
import MatchProvider from "./Contexts/MatchContext";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <MatchProvider>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/play" element={<PrivateRoutes><GameView /></PrivateRoutes>} />
                <Route path="/fight" element={<PrivateRoutes><FightView /></PrivateRoutes>} />
              </Route>
            </Routes>
          </MatchProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;



