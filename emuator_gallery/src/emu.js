import React, { useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';


function EmulatorSearch( { onEmulatorSelect }) {
  const [emulators, setEmulators] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmulator, setSelectedEmulator] = useState(null);

  useEffect(() => {
    fetch("/emulator_info.json")
      .then((response) => response.json())
      .then((data) => setEmulators(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const emulator = emulators.find(
      (em) => em.Emulator_name.toLowerCase() === query.toLowerCase()
    );
    setSelectedEmulator(emulator || null);

    onEmulatorSelect(emulator || null);

  };

  return (
    <div>
      <h1>Emulator Search</h1>
      {/* <input
        type="text"
        placeholder="Enter emulator name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}

        <div className="button-container">
        <button onClick={() => handleSearch("Dolphin")}>Dolphin</button>
        <button onClick={() => handleSearch("PCSX2")}>PCSX2</button>
        <button onClick={() => handleSearch("RetroArch")}>RetroArch</button>
        </div>


      {/* <button onClick={handleSearch}>Search</button> */}

      {selectedEmulator ? (
        <div className="emulator-details">
          <h2>{selectedEmulator.Emulator_name}</h2>
          <p>{selectedEmulator.Emulator_description}</p>

           <Canvas className="canvas-container">
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} color="red" intensity={1} />
              <Cube src={selectedEmulator.Emulator_photo_link}  />
          </Canvas>

        </div>
      ) : (
        searchQuery && <p></p>
      )}
    </div>
  );
}

export default EmulatorSearch;
