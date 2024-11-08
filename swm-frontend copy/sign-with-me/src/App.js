import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Units from "./components/Units";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Unit1 from "./components/Unit1";
import Translator from "./components/Translator";
import Quiz from "./components/quiz"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path ="/quiz" element ={<Quiz />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/units/unit1" element={<Unit1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
