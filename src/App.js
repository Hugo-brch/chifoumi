import Connexion from "./View/ConnexionView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";
import AppLayout from "./Layouts/AppLayout";
import Home from "./View/Home";
import PrivateRoutes from "./Components/PrivateRoute";
import GameView from "./View/GameView";





function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Connexion" element={<Connexion/>} />
          <Route
							path="/play"
							element={
								<PrivateRoutes>
									<GameView/>
								</PrivateRoutes>
							}
						></Route>
          </Route>
        </Routes>  
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;



