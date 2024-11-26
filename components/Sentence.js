

// import React, { useState } from "react";
// import "./Sentence.css"
// const App = () => {
//   // Sentence data
//   const questions = [
//     ["I", "READ", "BOOK"],
//     ["I", "LOVE", "YOU"],
//     ["DOG", "RUNS", "FAST"],
//     ["MY", "NAME", "IS", "JOHN"],
//     ["SHE", "IS", "NICE"],
//   ];

//   // State
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentSentence, setCurrentSentence] = useState([]);
//   const [draggedWord, setDraggedWord] = useState("");

//   // Drag-and-drop handlers
//   const allowDrop = (e) => e.preventDefault();

//   const handleDragStart = (word) => {
//     setDraggedWord(word);
//   };

//   const handleDrop = () => {
//     setCurrentSentence((prev) => [...prev, draggedWord]);
//     setDraggedWord("");
//   };

//   const checkSentence = () => {
//     const isCorrect =
//       JSON.stringify(currentSentence) ===
//       JSON.stringify(questions[currentQuestionIndex]);
//     if (isCorrect) {
//       alert("Correct!");
//       if (currentQuestionIndex < questions.length - 1) {
//         // Move to the next question
//         setCurrentQuestionIndex((prev) => prev + 1);
//         setCurrentSentence([]);
//       } else {
//         alert("You have completed all questions!");
//       }
//     } else {
//       alert("Try again!");
//     }
//   };

//   return (
//     <div>
//       <header>
//         <h1>ASL Practice</h1>
//         <nav>
//           <a href="index.html">Vocabulary</a>
//           <a href="/units/lesson4">Grammar Rules</a>
//         </nav>
//       </header>

//       <main>
//         <section>
//           <h2>Practice: Build a Sentence</h2>
//           <p>Drag and drop words to form the correct ASL sentence:</p>

//           {/* Display the current question */}
//           <div className="question">
//             {questions[currentQuestionIndex].map((word) => (
//               <div
//                 key={word}
//                 draggable
//                 onDragStart={() => handleDragStart(word)}
//                 className="word"
//               >
//                 {word}
//               </div>
//             ))}
//           </div>

//           {/* Drop zone */}
//           <div
//             className="drop-zone"
//             onDrop={handleDrop}
//             onDragOver={allowDrop}
//           >
//             {currentSentence.map((word, index) => (
//               <span key={index} className="dropped-word">
//                 {word}
//               </span>
//             ))}
//           </div>

//           <button onClick={checkSentence}>Submit</button>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./Sentence.css";

const App = () => {
  // Sentence data
  const questions = [
    ["I", "READ", "BOOK"],
    ["I", "LOVE", "YOU"],
    ["DOG", "RUNS", "FAST"],
    ["MY", "NAME", "IS", "JOHN"],
    ["SHE", "IS", "NICE"],
  ];

  // Correct ASL translations
  const aslTranslations = [
    ["BOOK", "I", "READ"], // ASL structure for "I READ BOOK"
    ["YOU", "I", "LOVE"],  // ASL structure for "I LOVE YOU"
    ["DOG", "RUNS", "FAST"], // Same as original
    ["MY", "NAME", "IS", "JOHN"], // ASL structure with "IS" fingerspelled
    ["SHE", "IS", "NICE"], // ASL structure with "IS" fingerspelled
  ];

  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState([]);
  const [draggedWord, setDraggedWord] = useState("");

  // Drag-and-drop handlers
  const allowDrop = (e) => e.preventDefault();

  const handleDragStart = (word) => {
    setDraggedWord(word);
  };

  const handleDrop = () => {
    setCurrentSentence((prev) => [...prev, draggedWord]);
    setDraggedWord("");
  };

  const checkSentence = () => {
    const isCorrect =
      JSON.stringify(currentSentence) ===
      JSON.stringify(aslTranslations[currentQuestionIndex]);
    if (isCorrect) {
      alert("Correct!");
      if (currentQuestionIndex < questions.length - 1) {
        // Move to the next question
        setCurrentQuestionIndex((prev) => prev + 1);
        setCurrentSentence([]);
      } else {
        alert("You have completed all questions!");
      }
    } else {
      alert("Try again!");
    }
  };

  // Clear drop zone
  const clearDropZone = () => {
    setCurrentSentence([]);
  };

  return (
    <div>
      <header>
        <h1>ASL Practice</h1>
        <nav>
          <a href="index.html">Vocabulary</a>
          <a href="/units/lesson4">Grammar Rules</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Practice: Build a Sentence</h2>
          <p>Drag and drop words to form the correct ASL sentence:</p>

          {/* Display the current question */}
          <div className="question">
            {questions[currentQuestionIndex].map((word) => (
              <div
                key={word}
                draggable
                onDragStart={() => handleDragStart(word)}
                className="word"
              >
                {word}
              </div>
            ))}
          </div>

          {/* Drop zone */}
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={allowDrop}
          >
            {currentSentence.map((word, index) => (
              <span key={index} className="dropped-word">
                {word}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button onClick={checkSentence}>Submit</button>
            <button onClick={clearDropZone}>Clear</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
