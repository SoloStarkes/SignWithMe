import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Footer from './Footer'; // Import the Footer component
import UnitSet from './UnitSet';  // Assuming UnitSet.js is in the same folder




function App() {
  return (
    <div className="App">
      <Navbar />
      <UnitSet />

      <Footer />
    </div>
  );
}

export default App;
