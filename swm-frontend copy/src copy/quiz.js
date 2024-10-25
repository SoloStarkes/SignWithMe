// import React, { useState, useEffect } from 'react';
// import imageA from './Letters/ASLAlphabetPoster_A.webp.png';
// import imageB from './Letters/ASLAlphabetPoster_B.webp.png';
// import imageC from './Letters/ASLAlphabetPoster_C.webp.png';
// import imageD from './Letters/ASLAlphabetPoster_D.webp.png';
// import imageCAT from './Letters/ASL_CAT.webp';
// import imageDOG from './Letters/ASL_DOG1.webp';
// import imageBEE from './Letters/ASL_BEE.webp';
// import imageANT from './Letters/ASL_ANT.webp';
// import './quiz.css';

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [isLevel1, setIsLevel1] = useState(true);
//   const [score, setScore] = useState(0);
//   const [currentData, setCurrentData] = useState([]);
//   const [feedback, setFeedback] = useState(''); // State for feedback message

//   const level1Data = [
//       {
//           question: "Select the letter this sign represents.",
//           image: imageA,
//           choices: ["A", "B", "C", "D"],
//           correct: "A",
//       },
//       {
//           question: "Select the letter this sign represents.",
//           image: imageB,
//           choices: ["A", "B", "C", "D"],
//           correct: "B",
//       },
//       // Add more level 1 questions as needed
//   ];

//   const level2Data = [
//       {
//           question: "Spell the word 'DOG'.",
//           image: imageD,
//           choices: [imageDOG, imageCAT, imageBEE, imageANT],
//           correct: imageDOG,
//       },
//       {
//           question: "Spell the word 'CAT'.",
//           image: imageC,
//           choices: [imageDOG, imageCAT, imageBEE, imageANT],
//           correct: imageCAT,
//       },
//       // Add more level 2 questions as needed
//   ];

//   useEffect(() => {
//       setCurrentData(isLevel1 ? level1Data : level2Data);
//       setCurrentQuestionIndex(0); // Reset question index when level changes
//       setScore(0); // Reset score when level changes
//       setFeedback(''); // Reset feedback when level changes
//   }, [isLevel1]);

//   const handleAnswerChange = (selected) => {
//       const currentQuestion = currentData[currentQuestionIndex];
//       if (selected === currentQuestion.correct) {
//           setScore(score + 1);
//           setFeedback("Correct!"); // Set feedback for correct answer
//       } else {
//           setFeedback(`Incorrect! The correct answer was ${currentQuestion.correct}.`); // Set feedback for incorrect answer
//       }

//       const nextIndex = currentQuestionIndex + 1;
//       if (nextIndex < currentData.length) {
//           setTimeout(() => {
//               setCurrentQuestionIndex(nextIndex);
//               setFeedback(''); // Clear feedback for the next question
//           }, 1000); // Wait 1 second before moving to the next question
//       } else {
//           console.log("Quiz finished");
//           // Handle quiz end (e.g., show a success modal or redirect)
//       }
//   };

//   const handleNextLevel = () => {
//       setIsLevel1(false);
//   };

//   if (!currentData.length || !currentData[currentQuestionIndex]) {
//       return <div>Loading...</div>;
//   }

//   const currentQuestion = currentData[currentQuestionIndex];

//   return (
//       <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//           <h2>ASL Quiz</h2>
//           <p>{currentQuestion.question}</p>
//           <img src={currentQuestion.image} alt="ASL Sign" style={{ maxWidth: '100%', height: 'auto' }} />

//           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
//               {currentQuestion.choices.map((choice, index) => (
//                   <button
//                       key={index}
//                       onClick={() => handleAnswerChange(choice)}
//                       style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
//                   >
//                       {isLevel1 ? choice : <img src={choice} alt="ASL Choice" style={{ width: '50px', height: '50px' }} />}
//                   </button>
//               ))}
//           </div>

//           {feedback && <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: 'green' }}>{feedback}</div>} {/* Display feedback */}
          
//           {currentQuestionIndex < currentData.length - 1 && (
//               <button 
//                   onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} 
//                   style={{ marginTop: '20px' }}
//               >
//                   Next Question
//               </button>
//           )}
          
//           {isLevel1 && currentQuestionIndex === level1Data.length - 1 && (
//               <button 
//                   onClick={handleNextLevel} 
//                   style={{ marginTop: '20px' }}
//               >
//                   Next Level
//               </button>
//           )}
          
//           {/* Optionally display score */}
//           <div style={{ marginTop: '20px' }}>
//               <strong>Score: {score}</strong>
//           </div>
//       </div>
//   );
// }

// export default Quiz;

import React, { useState, useEffect } from 'react';
import imageA from './Letters/ASLAlphabetPoster_A.webp.png';
import imageB from './Letters/ASLAlphabetPoster_B.webp.png';
import imageC from './Letters/ASLAlphabetPoster_C.webp.png';
import imageD from './Letters/ASLAlphabetPoster_D.webp.png';
import imageCAT from './Letters/ASL_CAT.webp';
import imageDOG from './Letters/ASL_DOG1.webp';
import imageBEE from './Letters/ASL_BEE.webp';
import imageANT from './Letters/ASL_ANT.webp';
import './quiz.css';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLevel1, setIsLevel1] = useState(true);
  const [score, setScore] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [feedback, setFeedback] = useState('');

  const level1Data = [
      {
          question: "Select the letter this sign represents.",
          image: imageA,
          choices: ["A", "B", "C", "D"],
          correct: "A",
      },
      {
          question: "Select the letter this sign represents.",
          image: imageB,
          choices: ["A", "B", "C", "D"],
          correct: "B",
      },
  ];

  const level2Data = [
      {
          question: "Spell the word 'DOG'.",
          image: imageD,
          choices: [imageDOG, imageCAT, imageBEE, imageANT],
          correct: imageDOG,
      },
      {
          question: "Spell the word 'CAT'.",
          image: imageC,
          choices: [imageDOG, imageCAT, imageBEE, imageANT],
          correct: imageCAT,
      },
  ];

  useEffect(() => {
      setCurrentData(isLevel1 ? level1Data : level2Data);
      setCurrentQuestionIndex(0);
      setScore(0);
      setFeedback('');
  }, [isLevel1]);

  const handleAnswerChange = (selected) => {
      const currentQuestion = currentData[currentQuestionIndex];
      if (selected === currentQuestion.correct) {
          setScore(score + 1);
          setFeedback("Correct!");
      } else {
          setFeedback(`Incorrect! The correct answer was ${currentQuestion.correct}.`);
      }

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < currentData.length) {
          setTimeout(() => {
              setCurrentQuestionIndex(nextIndex);
              setFeedback('');
          }, 1000);
      } else {
          console.log("Quiz finished");
      }
  };

  const handleNextLevel = () => {
      setIsLevel1(false);
  };

  if (!currentData.length || !currentData[currentQuestionIndex]) {
      return <div>Loading...</div>;
  }

  const currentQuestion = currentData[currentQuestionIndex];

  return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <h2>ASL Quiz</h2>
          <p>{currentQuestion.question}</p>
          <img src={currentQuestion.image} alt="ASL Sign" style={{ maxWidth: '100%', height: 'auto' }} />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
              {currentQuestion.choices.map((choice, index) => (
                  <button
                      key={index}
                      onClick={() => handleAnswerChange(choice)}
                      style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
                  >
                      {isLevel1 ? (
                          choice
                      ) : (
                          <img src={choice} alt="ASL Choice" style={{ width: '250px', height: '100px' }} />
                      )}
                  </button>
              ))}
          </div>

          {feedback && <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: 'green' }}>{feedback}</div>}
          
          {currentQuestionIndex < currentData.length - 1 && (
              <button 
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} 
                  style={{ marginTop: '20px' }}
              >
                  Next Question
              </button>
          )}
          
          {isLevel1 && currentQuestionIndex === level1Data.length - 1 && (
              <button 
                  onClick={handleNextLevel} 
                  style={{ marginTop: '20px' }}
              >
                  Next Level
              </button>
          )}
          
          <div style={{ marginTop: '20px' }}>
              <strong>Score: {score}</strong>
          </div>
      </div>
  );
}

export default Quiz;
