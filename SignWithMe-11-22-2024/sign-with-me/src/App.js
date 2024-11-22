import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Units from "./components/Units";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Learning_Alpha from "./components/Learning_Alphabet";
import Translator from "./components/Translator";
import Quiz from "./components/Alphabet_Quiz"
import NavBar from "./components/Navbar"
import Finger_Spelling from "./components/Finger_Spelling"
import Greetings from "./components/Greetings"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path ="/quiz" element ={<Quiz />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/units/lesson1" element={<Learning_Alpha />} />
        <Route path="/units/lesson2" element={<Finger_Spelling />} />
        <Route path="/units/lesson3" element={<Greetings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
