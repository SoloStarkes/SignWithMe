import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Units from "./components/Units";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Unit1 from "./components/Unit1";
import Translator from "./components/Translator";
import Quiz from "./components/quiz";
import NavBar from "./components/Navbar";
import Hello from "./components/Hello";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:5000/api")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/units/unit1" element={<Unit1 />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
