// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import axios
// import "./UnitSet.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";


// const UnitSet = () => {
//   const [openUnit, setOpenUnit] = useState(null); // Tracks which unit dropdown is open
//   const [openLesson, setOpenLesson] = useState(null); // Tracks which lesson dropdown is open
//   const [quizCompletedAlpha, setquizCompletedAlpha] = useState(false); // Tracks if the quiz for lesson 101 is completed
//   const [quizCompletedFinger, setquizCompletedFinger] = useState(false); // Tracks if the quiz for lesson 101 is completed
//   const [quizCompletedGreetings, setquizCompletedGreetings] = useState(false); // Tracks if the quiz for lesson 101 is completed
//   const [quizCompletedGrammer, setquizCompletedGrammer] = useState(false); // Tracks if the quiz for lesson 101 is completed
//   const [quizCompletedNounAdj, setquizCompletedNounAdj] = useState(false); // Tracks if the quiz for lesson 101 is completed
//   const [quizCompletedVerbColors, setquizCompletedVerbColors] = useState(false); // Tracks if the quiz for lesson 101 is completed

//   // Check if the user is signed in and retrieve their username
//   const userName = localStorage.getItem("userName");

//   useEffect(() => {
//     if (userName) {
//       // Unit 1
//       axios
//         .get("http://localhost:5001/api/lessons/get-lesson", {
//           params: {
//             lessonId: "101", // Lesson ID to check
//             userName: userName, // The userName from local storage
//           },
//         })
//         .then((response) => {
//           const lesson = response.data.lesson;
//           console.log("Lesson Data:", lesson); // Log the fetched lesson
//           if (lesson && lesson.quiz_complete) {
//             console.log("Quiz Completed is true!"); // Confirm quiz status
//             setquizCompletedAlpha(true);
//           } else {
//             console.log("Quiz Completed is false or not set.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching lesson data:", error);
//         });

//       axios
//         .get("http://localhost:5001/api/lessons/get-lesson", {
//           params: {
//             lessonId: "102", // Lesson ID to check
//             userName: userName, // The userName from local storage
//           },
//         })
//         .then((response) => {
//           const lesson = response.data.lesson;
//           console.log("Lesson Data:", lesson); // Log the fetched lesson
//           if (lesson && lesson.quiz_complete) {
//             console.log("Quiz Completed is true!"); // Confirm quiz status
//             setquizCompletedFinger(true);
//           } else {
//             console.log("Quiz Completed is false or not set.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching lesson data:", error);
//         });
//       axios
//         .get("http://localhost:5001/api/lessons/get-lesson", {
//           params: {
//             lessonId: "103", // Lesson ID to check
//             userName: userName, // The userName from local storage
//           },
//         })
//         .then((response) => {
//           const lesson = response.data.lesson;
//           console.log("Lesson Data:", lesson); // Log the fetched lesson
//           if (lesson && lesson.quiz_complete) {
//             console.log("Quiz Completed is true!"); // Confirm quiz status
//             setquizCompletedGreetings(true);
//           } else {
//             console.log("Quiz Completed is false or not set.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching lesson data:", error);
//         });

//       // Unit 2
//       axios
//         .get("http://localhost:5001/api/lessons/get-lesson", {
//           params: {
//             lessonId: "201", // Lesson ID to check
//             userName: userName, // The userName from local storage
//           },
//         })
//         .then((response) => {
//           const lesson = response.data.lesson;
//           console.log("Lesson Data:", lesson); // Log the fetched lesson
//           if (lesson && lesson.quiz_complete) {
//             console.log("Quiz Completed is true!"); // Confirm quiz status
//             setquizCompletedGrammer(true);
//           } else {
//             console.log("Quiz Completed is false or not set.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching lesson data:", error);
//         });

//       axios
//         .get("http://localhost:5001/api/lessons/get-lesson", {
//           params: {
//             lessonId: "202", // Lesson ID to check
//             userName: userName, // The userName from local storage
//           },
//         })
//         .then((response) => {
//           const lesson = response.data.lesson;
//           console.log("Lesson Data:", lesson); // Log the fetched lesson
//           if (lesson && lesson.quiz_complete) {
//             console.log("Quiz Completed is true!"); // Confirm quiz status
//             setquizCompletedNounAdj(true);
//           } else {
//             console.log("Quiz Completed is false or not set.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching lesson data:", error);
//         });

//       axios
//         .get("http://localhost:5001/api/lessons/get-lesson", {
//           params: {
//             lessonId: "203", // Lesson ID to check
//             userName: userName, // The userName from local storage
//           },
//         })
//         .then((response) => {
//           const lesson = response.data.lesson;
//           console.log("Lesson Data:", lesson); // Log the fetched lesson
//           if (lesson && lesson.quiz_complete) {
//             console.log("Quiz Completed is true!"); // Confirm quiz status
//             setquizCompletedVerbColors(true);
//           } else {
//             console.log("Quiz Completed is false or not set.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching lesson data:", error);
//         });
//     } else {
//       setquizCompletedAlpha(false);
//       setquizCompletedFinger(false);
//       setquizCompletedGreetings(false);
//       setquizCompletedGrammer(false);
//       setquizCompletedNounAdj(false);
//       setquizCompletedVerbColors(false);
//     }
//   }, [userName]);

//   const toggleUnit = (unit) => {
//     setOpenUnit(openUnit === unit ? null : unit);
//     setOpenLesson(null); // Close any lesson dropdowns when toggling units
//   };

//   const toggleLesson = (lesson) => {
//     setOpenLesson(openLesson === lesson ? null : lesson);
//   };
//   const progress = quizCompletedGreetings ? 100 : 0; // Progress is either 0% or 100%

//   return (
//     <div className="unitset-container">
//       <h1 style={{fontSize: '50px' }} >Units Dashboard</h1>
//       <div className="unitset-list">
//         {/* Unit 1 */}
//         <div style={{fontSize: '25px' }} >
//           <button  onClick={() => toggleUnit(1)} className="unit-button">
//             Unit 1: Basics
//             {quizCompletedAlpha &&
//               quizCompletedFinger &&
//               quizCompletedGreetings && (
//                 <span>🏆</span>
//               )}
//           </button>
//           {openUnit === 1 && (
//             <div  className="lesson-dropdown">
//               <Link to="/units/lesson1" className="lesson-link">
//                 Alphabet{" "}
//                 {quizCompletedAlpha && (
//                 <span>🏆</span>
//               )}
//               </Link>
//               <Link to="/units/lesson2" className="lesson-link">
//                 Finger Spelling{" "}
//                 {quizCompletedFinger && (
//                 <span>🏆</span>
//                 )}
//               </Link>
//               <Link to="/units/lesson3" className="lesson-link">
//                 Greetings{" "}
//                 {quizCompletedGreetings && (
//                   <span>🏆</span>
//                 )}
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={progress}
//                     text={`${progress}%`}
//                     styles={{
//                       path: { stroke: quizCompletedGreetings ? "green" : "red" },
//                       text: { fill: quizCompletedGreetings ? "green" : "red" },
//                     }}
//                   />
//                 </div>


//               </Link>
//             </div>
//           )}
//         </div>
//         <div style={{fontSize: '25px' }} >
//           <button onClick={() => toggleUnit(2)} className="unit-button">
//             Unit 2: Intermediate
//             {quizCompletedGrammer &&
//               quizCompletedNounAdj &&
//               quizCompletedVerbColors && (
//                 <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
//               )}
//           </button>
//           {openUnit === 2 && (
//             <div className="lesson-dropdown">
//               <Link to="/units/lesson4" className="lesson-link">
//                 Grammer{" "}
//                 {quizCompletedGrammer && (
//                   <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
//                 )}
//               </Link>
//               <Link to="/units/lesson5/N_A" className="lesson-link">
//                 Nouns and Adjectives{" "}
//                 {quizCompletedNounAdj && (
//                   <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
//                 )}
//               </Link>
//               <Link to="/units/lesson6" className="lesson-link">
//                 Verbs and Colors{" "}
//                 {quizCompletedVerbColors && (
//                   <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
//                 )}
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Unit 3 */}
//         <div style={{fontSize: '25px' }} >
//           <button onClick={() => toggleUnit(3)} className="unit-button">
//             Unit 3: Advanced
//           </button>
//           {openUnit === 3 && (
//             <div className="lesson-dropdown">
//               <Link to="/units/lesson7" className="lesson-link">
//                 Numbers{" "}
//                 {/* {quizCompletedAlpha && (
//                   <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
//                 )} */}
//               </Link>
              
//             </div>
//           )}
//         </div>

//         {/* Final */}
//         <div style={{fontSize: '25px' }}>
//           <button onClick={() => toggleUnit(4)} className="unit-button">
//             Final Examination
//           </button>
//           {openUnit === 4 && (
//             <div className="lesson-dropdown">
//               <Link to="/units/Final" className="lesson-link">
//                 Final Exam{" "}
//               {quizCompletedAlpha && (
//                 <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
//               )}
//             </Link>
      
//           </div>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnitSet;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./UnitSet.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const UnitSet = () => {
//   const [openUnit, setOpenUnit] = useState(null);
//   const [quizStatus, setQuizStatus] = useState({
//     alpha: false,
//     finger: false,
//     greetings: false,
//     grammar: false,
//     nounAdj: false,
//     verbColors: false,
//   });

//   const userName = localStorage.getItem("userName");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuizStatus = async (lessonId, key) => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/lessons/get-lesson", {
//           params: { lessonId, userName },
//         });
//         if (response.data.lesson?.quiz_complete) {
//           setQuizStatus((prev) => ({ ...prev, [key]: true }));
//         }
//       } catch (error) {
//         console.error(`Error fetching data for lesson ${lessonId}:`, error);
//       }
//     };

//     if (userName) {
//       fetchQuizStatus("101", "alpha");
//       fetchQuizStatus("102", "finger");
//       fetchQuizStatus("103", "greetings");
//       fetchQuizStatus("201", "grammar");
//       fetchQuizStatus("202", "nounAdj");
//       fetchQuizStatus("203", "verbColors");
//     }
//   }, [userName]);

//   const toggleUnit = (unit) => {
//     setOpenUnit(openUnit === unit ? null : unit);
//   };

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const progress = {
//     alpha: quizStatus.alpha ? 100 : 0,
//     finger: quizStatus.finger ? 100 : 0,
//     greetings: quizStatus.greetings ? 100 : 0,
//     grammar: quizStatus.grammar ? 100 : 0,
//     nounAdj: quizStatus.nounAdj ? 100 : 0,
//     verbColors: quizStatus.verbColors ? 100 : 0,
//   };

//   return (
//     <div className="unitset-container">
//       <h1 style={{ fontSize: "50px" }}>Units Dashboard</h1>
//       <div className="unitset-list">
//         {/* Unit 1 */}
//         <div style={{ fontSize: "25px" }}>
//           <button onClick={() => toggleUnit(1)} className="unit-button">
//             Unit 1: Basics
//             {quizStatus.alpha && quizStatus.finger && quizStatus.greetings && <span>🏆</span>}
//           </button>
//           {openUnit === 1 && (
//             <div className="lesson-dropdown">
//               <div className="lesson-container">
//                 <h3>Alphabet {quizStatus.alpha && <span>🏆</span>}</h3>
//                 <button onClick={() => handleNavigate("/units/lesson1")} className="lesson-button">
//                   Go to Alphabet Lesson
//                 </button>
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={quizStatus.alpha ? 100 : 0}
//                     text={`${quizStatus.alpha ? 100 : 0}%`}
//                     styles={{
//                       path: { stroke: quizStatus.alpha ? "green" : "red" },
//                       text: { fill: quizStatus.alpha ? "green" : "red" },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="lesson-container">
//                 <h3>Finger Spelling {quizStatus.finger && <span>🏆</span>}</h3>
//                 <button onClick={() => handleNavigate("/units/lesson2")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={quizStatus.finger ? 100 : 0}
//                     text={`${quizStatus.finger ? 100 : 0}%`}
//                     styles={{
//                       path: { stroke: quizStatus.finger ? "green" : "red" },
//                       text: { fill: quizStatus.finger ? "green" : "red" },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="lesson-container">
//                 <h3>Greetings {quizStatus.greetings && <span>🏆</span>}</h3>
//                 <button onClick={() => handleNavigate("/units/lesson3")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={quizStatus.greetings ? 100 : 0}
//                     text={`${quizStatus.greetings ? 100 : 0}%`}
//                     styles={{
//                       path: { stroke: quizStatus.greetings ? "green" : "red" },
//                       text: { fill: quizStatus.greetings ? "green" : "red" },
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
  
//         {/* Unit 2 */}
//         <div style={{ fontSize: "25px" }}>
//           <button onClick={() => toggleUnit(2)} className="unit-button">
//             Unit 2: Intermediate
//             {quizStatus.grammar && quizStatus.nounAdj && quizStatus.verbColors && <span>✔</span>}
//           </button>
//           {openUnit === 2 && (
//             <div className="lesson-dropdown">
//               <div className="lesson-container">
//                 <h3>Grammar {quizStatus.grammar && <span>✔</span>}</h3>
//                 <button onClick={() => handleNavigate("/units/lesson4")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={quizStatus.grammar ? 100 : 0}
//                     text={`${quizStatus.grammar ? 100 : 0}%`}
//                     styles={{
//                       path: { stroke: quizStatus.grammar ? "green" : "red" },
//                       text: { fill: quizStatus.grammar ? "green" : "red" },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="lesson-container">
//                 <h3>Nouns and Adjectives {quizStatus.nounAdj && <span>✔</span>}</h3>
//                 <button onClick={() => handleNavigate("/units/lesson5/N_A")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={quizStatus.nounAdj ? 100 : 0}
//                     text={`${quizStatus.nounAdj ? 100 : 0}%`}
//                     styles={{
//                       path: { stroke: quizStatus.nounAdj ? "green" : "red" },
//                       text: { fill: quizStatus.nounAdj ? "green" : "red" },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="lesson-container">
//                 <h3>Verbs and Colors {quizStatus.verbColors && <span>✔</span>}</h3>
//                 <button onClick={() => handleNavigate("/units/lesson6")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//                 <div className="progress-container">
//                   <CircularProgressbar
//                     value={quizStatus.verbColors ? 100 : 0}
//                     text={`${quizStatus.verbColors ? 100 : 0}%`}
//                     styles={{
//                       path: { stroke: quizStatus.verbColors ? "green" : "red" },
//                       text: { fill: quizStatus.verbColors ? "green" : "red" },
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
  
//         {/* Unit 3 */}
//         <div style={{ fontSize: "25px" }}>
//           <button onClick={() => toggleUnit(3)} className="unit-button">
//             Unit 3: Advanced
//           </button>
//           {openUnit === 3 && (
//             <div className="lesson-dropdown">
//               <div className="lesson-container">
//                 <h3>Numbers</h3>
//                 <button onClick={() => handleNavigate("/units/lesson7")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
  
//         {/* Final */}
//         <div style={{ fontSize: "25px" }}>
//           <button onClick={() => toggleUnit(4)} className="unit-button">
//             Final Examination
//           </button>
//           {openUnit === 4 && (
//             <div className="lesson-dropdown">
//               <div className="lesson-container">
//                 <h3>Final Exam</h3>
//                 <button onClick={() => handleNavigate("/units/Final")} className="lesson-button">
//                   Go to Lesson
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnitSet;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UnitSet.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UnitSet = () => {
  const [openUnit, setOpenUnit] = useState(null);
  const [quizStatus, setQuizStatus] = useState({});
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const lessons = {
    1: [
      { id: "101", key: "alpha", title: "Alphabet", path: "/units/lesson1" },
      { id: "102", key: "finger", title: "Finger Spelling", path: "/units/lesson2" },
      { id: "103", key: "greetings", title: "Greetings", path: "/units/lesson3" },
    ],
    2: [
      { id: "201", key: "grammar", title: "Grammar", path: "/units/lesson4" },
      { id: "202", key: "nounAdj", title: "Nouns and Adjectives", path: "/units/lesson5/N_A" },
      { id: "203", key: "verbColors", title: "Verbs and Colors", path: "/units/lesson6" },
    ],
    3: [
      { id: "301", key: "numbers", title: "Numbers", path: "/units/lesson7" },
    ],
    4: [
      { id: "401", key: "finalExam", title: "Final Exam", path: "/units/Final" },
    ],
  };

  useEffect(() => {
    const fetchQuizStatuses = async () => {
      try {
        const promises = Object.values(lessons)
          .flat()
          .map(({ id, key }) =>
            axios
              .get("http://localhost:5001/api/lessons/get-lesson", {
                params: { lessonId: id, userName },
              })
              .then((response) => {
                if (response.data.lesson?.quiz_complete) {
                  setQuizStatus((prev) => ({ ...prev, [key]: true }));
                }
              })
          );
        await Promise.all(promises);
      } catch (error) {
        console.error("Error fetching quiz statuses:", error);
      }
    };

    if (userName) fetchQuizStatuses();
  }, [userName]);

  const toggleUnit = (unit) => {
    setOpenUnit(openUnit === unit ? null : unit);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const getProgress = (key) => (quizStatus[key] ? 100 : 0);

  return (
    <div className="unitset-container">
      <h1 style={{ fontSize: "50px" }}>Units Dashboard</h1>
      <div className="unitset-list">
        {Object.entries(lessons).map(([unitNumber, unitLessons]) => (
          <div style={{ fontSize: "25px" }} key={`unit-${unitNumber}`}>
            <button
              onClick={() => toggleUnit(unitNumber)}
              className="unit-button"
            >
              {`Unit ${unitNumber}: ${unitNumber === "1"
                ? "Basics"
                : unitNumber === "2"
                ? "Intermediate"
                : unitNumber === "3"
                ? "Advanced"
                : "Final Examination"
              }`}
              {unitLessons.every(({ key }) => quizStatus[key]) && <span>🏆</span>}
            </button>
            {openUnit === unitNumber && (
              <div className="lesson-dropdown">
                {unitLessons.map(({ id, key, title, path }) => (
                  <div className="lesson-container" key={`lesson-${id}`}>
                    <h3>
                      {title} {quizStatus[key] && <span>🏆</span>}
                    </h3>
                    <button
                      onClick={() => handleNavigate(path)}
                      className="lesson-button"
                    >
                      Go to Lesson
                    </button>
                    <div className="progress-container">
                      <CircularProgressbar
                        value={getProgress(key)}
                        text={`${getProgress(key)}%`}
                        styles={{
                          path: {
                            stroke: quizStatus[key] ? "green" : "red",
                          },
                          text: {
                            fill: quizStatus[key] ? "green" : "red",
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitSet;
