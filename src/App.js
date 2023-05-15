import Connexion from "./view/ConnexionView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";
import AppLayout from "./Layouts/AppLayout";
import Home from "./view/Home";
import PrivateRoutes from "./Components/PrivateRoute";
import GameView from "./view/GameView";





function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
          <Route path="/Home" element={<Home />} />
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



