import logo from './logo.svg';
import './App.css';
import AlphabetC from './Alphabet'; // Ensure this matches the exported name
import Navbar from './NavBar';
import Footer from './Footer'; // Import the Footer component
import Quiz from './quiz'; // Ensure the case matches your file name
import Unit from './UnitSet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>

        <div className="main-content" style={{ padding: '20px 0' }}>
          <Routes>
            <Route exact path="/" element={<Unit />} />
            <Route exact path="src/Alphabet.js" element={<AlphabetC />} />
            <Route exact path="src/quiz.js" element={<Quiz />} />
          </Routes>
        </div>

        <div className="Foot">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
