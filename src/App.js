import Connexion from "./view/ConnexionView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";
import AppLayout from "./Layouts/AppLayout";
import EventProvider from "./Contexts/EventContext";
import Home from "./view/Home";
import ListMatchesView from "./view/ListMatchesView";
import MatchProvider from "./Contexts/MatchContext";
import GameView from "./view/GameView";





function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AuthProvider>
        <MatchProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="Connexion" element={<Connexion/>} />
             <Route path="matches" element={<ListMatchesView/>} />
          <Route path="matches/:id" element={<EventProvider><GameView/></EventProvider>} / >
          </Route>
        </Routes>  
        </MatchProvider>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;



