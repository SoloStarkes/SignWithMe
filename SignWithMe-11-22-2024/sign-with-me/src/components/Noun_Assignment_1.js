// import React, { useState, useEffect } from "react";

// const DragAndDropASL = () => {
//   const nouns = [
//     { name: "HOME", image: "https://media.giphy.com/media/3o7TKqKtZG1bnbVyhi/giphy.gif" },
//     { name: "DOG", image: "https://media.giphy.com/media/l0HlBGjKUV8KJxDoc/giphy.gif" },
//     { name: "CAT", image: "https://media.giphy.com/media/LI7i6crQp5ffHyrosY/giphy.gif" },
//   ];

//   const aslSigns = [
//     { images: ["https://www.youtube.com/embed/uKAKaQG5FTI"], word: "Is your house big?" },
//     { images: ["https://www.youtube.com/embed/c1fJX4uQvLY"], word: "In what city do you live?" },
//     { images: ["https://media.giphy.com/media/LI7i6crQp5ffHyrosY/giphy.gif"], word: "CAT" },
//   ];

//   const [currentNoun, setCurrentNoun] = useState(0);
//   const [currentSign, setCurrentSign] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [aslFeedback, setAslFeedback] = useState("");
//   const [aslInput, setAslInput] = useState("");
//   const [droppedWord, setDroppedWord] = useState("");

//   useEffect(() => {
//     // Clear feedback when a new noun is displayed
//     setFeedback("");
//   }, [currentNoun]);

//   const handleDragStart = (event, word) => {
//     event.dataTransfer.setData("text/plain", word);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedWord = event.dataTransfer.getData("text/plain");
//     setDroppedWord(droppedWord);
//     checkSentence(droppedWord);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const checkSentence = (selectedWord) => {
//     const correctWord = nouns[currentNoun].name;
//     if (selectedWord === correctWord) {
//       setFeedback("Great job! Moving to the next sign.");
//       if (currentNoun + 1 < nouns.length) {
//         setCurrentNoun(currentNoun + 1);
//       } else {
//         setFeedback("You've completed all the signs!");
//       }
//     } else {
//       setFeedback("Try again!");
//     }
//   };

//   const checkASL = () => {
//     const correctAnswer = aslSigns[currentSign].word;
//     if (aslInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
//       setAslFeedback("Correct!");
//       nextASLSign();
//     } else {
//       setAslFeedback(`Try again! Hint: "${correctAnswer}"`);
//     }
//   };

//   const nextASLSign = () => {
//     if (currentSign + 1 < aslSigns.length) {
//       setCurrentSign(currentSign + 1);
//       setAslInput("");
//       setAslFeedback("");
//     } else {
//       setAslFeedback("Great job! You've completed all translations.");
//     }
//   };

//   return (
//     <div>
//       <h1>Drag and Drop: Match the ASL Sign</h1>
//       <div id="image-container">
//         <img
//           src={nouns[currentNoun].image}
//           alt={nouns[currentNoun].name}
//           id="current-noun-image"
//           style={{ width: "200px", height: "200px" }}
//         />
//       </div>
//       <div id="drag-words">
//         {nouns.map((noun) => (
//           <div
//             key={noun.name}
//             className="word"
//             draggable
//             onDragStart={(event) => handleDragStart(event, noun.name)}
//           >
//             {noun.name}
//           </div>
//         ))}
//       </div>
//       <div
//         id="drop-noun"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         style={{
//           border: "1px solid #ccc",
//           padding: "20px",
//           textAlign: "center",
//           marginTop: "20px",
//         }}
//       >
//         {droppedWord || "[Drop Noun Here]"}
//       </div>
//       <p id="feedback">{feedback}</p>

//       <h1>ASL Translation Practice</h1>
//       <div id="asl-container">
//         <div id="asl-image">
//           {aslSigns[currentSign].images[0].includes("youtube") ? (
//             <iframe
//               src={aslSigns[currentSign].images[0]}
//               width="560"
//               height="315"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <img
//               src={aslSigns[currentSign].images[0]}
//               alt={aslSigns[currentSign].word}
//               style={{ width: "200px", height: "200px" }}
//             />
//           )}
//         </div>
//         <input
//           type="text"
//           id="asl-translation"
//           placeholder="Type your translation here"
//           value={aslInput}
//           onChange={(e) => setAslInput(e.target.value)}
//         />
//         <button onClick={checkASL}>Submit</button>
//         <p id="asl-feedback">{aslFeedback}</p>
//       </div>
//     </div>
//   );
// };

// export default DragAndDropASL;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import if using react-router-dom
import "./N_Assignment1.css"

const DragAndDropASL = () => {
  const nouns = [
    { name: "HOME", image: "https://media.giphy.com/media/3o7TKqKtZG1bnbVyhi/giphy.gif" },
    { name: "DOG", image: "https://media.giphy.com/media/l0HlBGjKUV8KJxDoc/giphy.gif" },
    { name: "CAT", image: "https://media.giphy.com/media/LI7i6crQp5ffHyrosY/giphy.gif" },
  ];

  const [currentNoun, setCurrentNoun] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [droppedWord, setDroppedWord] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setFeedback("");
  }, [currentNoun]);

  const handleDragStart = (event, word) => {
    event.dataTransfer.setData("text/plain", word);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedWord = event.dataTransfer.getData("text/plain");
    setDroppedWord(droppedWord);
    checkSentence(droppedWord);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const checkSentence = (selectedWord) => {
    const correctWord = nouns[currentNoun].name;
    if (selectedWord === correctWord) {
      setFeedback("Great job! Moving to the next sign.");
      if (currentNoun + 1 < nouns.length) {
        setCurrentNoun(currentNoun + 1);
      } else {
        setFeedback("You've completed all the signs!");
        setIsCompleted(true);
      }
    } else {
      setFeedback("Try again!");
    }
  };

  return (
    <div>
      <h1>Drag and Drop: Match the ASL Sign</h1>
      <Link to="/units/lesson5/N_A" className = "Back_Button" style={{ marginRight: "10px", textDecoration: "none" }}>
            <button>Go to Noun Page</button>
      </Link>

      <div id="image-container">
        <img
          src={nouns[currentNoun].image}
          alt={nouns[currentNoun].name}
          id="current-noun-image"
          style={{ width: "700px", height: "400px" }}
        />

      </div>
      <div id="drag-words">
        {nouns.map((noun) => (
          <div
            key={noun.name}
            className="word"
            draggable
            onDragStart={(event) => handleDragStart(event, noun.name)}
          >
            {noun.name}
          </div>
        ))}
      </div>
      <div
        id="drop-noun"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >


        {droppedWord || "[Drop Noun Here]"}
      </div>

      <p id="feedback">{feedback}</p>

      {isCompleted && (
        <div style={{ marginTop: "20px" }}>
          {/* Using react-router-dom Link */}
          {/* Standard <a> tag for external links */}
          <a href="/units" style={{ textDecoration: "none" }}>
            <button>Back to Units Page</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default DragAndDropASL;
