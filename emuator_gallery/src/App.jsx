


import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import './App.css';

function App({ emulatorName }) {  // Accept emulator name as a prop
  const [emulators, setEmulators] = useState([]);
  const [selectedEmulator, setSelectedEmulator] = useState(null);

  useEffect(() => {
    fetch("./emulator_info.json")
      .then((response) => response.json())
      .then((data) => setEmulators(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  useEffect(() => {
    if (emulatorName) {
      const emulator = emulators.find(
        (em) => em.text.toLowerCase() === emulatorName.toLowerCase()
      );
      setSelectedEmulator(emulator || null);
    }
  }, [emulatorName, emulators]);

  return (
    <div className="Main_Div">
      {/* Canvas for 3D content */}
      <Canvas className="canvas-container">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="red" intensity={1} />
        <Cube src={selectedEmulator?.image} />
      </Canvas>
  
      {/* Display emulator information if found */}
      {selectedEmulator ? (
        <>
          <div className="emulator_summary">
            <p>{selectedEmulator.description}</p>
          </div>
          <div className="game_recommendations">
            <h1 className="creator_header">Creator Recommendations</h1>
            <p className="actual_games">
            <ul style={{listStyleType: 'none'}}>
                  {selectedEmulator.games.map((game, index) => (
                    <li key={index}>{game}</li>
                  ))}
            </ul>            
            </p>
          </div>
        </>
      ) : (
        <p>No emulator selected or emulator not found.</p>
      )}
    </div>
  );
}

export default App;
