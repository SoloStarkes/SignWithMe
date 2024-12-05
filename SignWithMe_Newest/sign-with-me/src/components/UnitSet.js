import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "./UnitSet.css";

const UnitSet = () => {
  const [openUnit, setOpenUnit] = useState(null); // Tracks which unit dropdown is open
  const [openLesson, setOpenLesson] = useState(null); // Tracks which lesson dropdown is open
  const [quizCompletedAlpha, setquizCompletedAlpha] = useState(false); // Tracks if the quiz for lesson 101 is completed
  const [quizCompletedFinger, setquizCompletedFinger] = useState(false); // Tracks if the quiz for lesson 101 is completed
  const [quizCompletedGreetings, setquizCompletedGreetings] = useState(false); // Tracks if the quiz for lesson 101 is completed
  const [quizCompletedGrammer, setquizCompletedGrammer] = useState(false); // Tracks if the quiz for lesson 101 is completed
  const [quizCompletedNounAdj, setquizCompletedNounAdj] = useState(false); // Tracks if the quiz for lesson 101 is completed
  const [quizCompletedVerbColors, setquizCompletedVerbColors] = useState(false); // Tracks if the quiz for lesson 101 is completed

  // Check if the user is signed in and retrieve their username
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    if (userName) {
      // Unit 1
      axios
        .get("http://localhost:5001/api/lessons/get-lesson", {
          params: {
            lessonId: "101", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedAlpha(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });

      axios
        .get("http://localhost:5001/api/lessons/get-lesson", {
          params: {
            lessonId: "102", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedFinger(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });
      axios
        .get("http://localhost:5001/api/lessons/get-lesson", {
          params: {
            lessonId: "103", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedGreetings(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });

      // Unit 2
      axios
        .get("http://localhost:5001/api/lessons/get-lesson", {
          params: {
            lessonId: "201", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedGrammer(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });

      axios
        .get("http://localhost:5001/api/lessons/get-lesson", {
          params: {
            lessonId: "202", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedNounAdj(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });

      axios
        .get("http://localhost:5001/api/lessons/get-lesson", {
          params: {
            lessonId: "203", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedVerbColors(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });
    } else {
      setquizCompletedAlpha(false);
      setquizCompletedFinger(false);
      setquizCompletedGreetings(false);
      setquizCompletedGrammer(false);
      setquizCompletedNounAdj(false);
      setquizCompletedVerbColors(false);
    }
  }, [userName]);

  const toggleUnit = (unit) => {
    setOpenUnit(openUnit === unit ? null : unit);
    setOpenLesson(null); // Close any lesson dropdowns when toggling units
  };

  const toggleLesson = (lesson) => {
    setOpenLesson(openLesson === lesson ? null : lesson);
  };

  return (
    <div className="unitset-container">
      <h1>Units Dashboard</h1>
      <div className="unitset-list">
        {/* Unit 1 */}
        <div>
          <button onClick={() => toggleUnit(1)} className="unit-button">
            Unit 1: Basics
            {quizCompletedAlpha &&
              quizCompletedFinger &&
              quizCompletedGreetings && (
                <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
              )}
          </button>
          {openUnit === 1 && (
            <div className="lesson-dropdown">
              <Link to="/units/lesson1" className="lesson-link">
                Alphabet{" "}
                {quizCompletedAlpha && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )}
              </Link>
              <Link to="/units/lesson2" className="lesson-link">
                Finger Spelling{" "}
                {quizCompletedFinger && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )}
              </Link>
              <Link to="/units/lesson3" className="lesson-link">
                Greetings{" "}
                {quizCompletedGreetings && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )}
              </Link>
            </div>
          )}
        </div>
        <div>
          <button onClick={() => toggleUnit(2)} className="unit-button">
            Unit 2: Intermediate
            {quizCompletedGrammer &&
              quizCompletedNounAdj &&
              quizCompletedVerbColors && (
                <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
              )}
          </button>
          {openUnit === 2 && (
            <div className="lesson-dropdown">
              <Link to="/units/lesson4" className="lesson-link">
                Grammer{" "}
                {quizCompletedGrammer && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )}
              </Link>
              <Link to="/units/lesson5/N_A" className="lesson-link">
                Nouns and Adjectives{" "}
                {quizCompletedNounAdj && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )}
              </Link>
              <Link to="/units/lesson6" className="lesson-link">
                Verbs and Colors{" "}
                {quizCompletedVerbColors && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )}
              </Link>
            </div>
          )}
        </div>

        {/* Unit 3 */}
        <div>
          <button onClick={() => toggleUnit(3)} className="unit-button">
            Unit 3: Advanced
          </button>
          {openUnit === 3 && (
            <div className="lesson-dropdown">
              <Link to="/units/lesson7" className="lesson-link">
                Numbers{" "}
                {/* {quizCompletedAlpha && (
                  <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
                )} */}
              </Link>
              
            </div>
          )}
        </div>

        {/* Final */}
        <div>
          <button onClick={() => toggleUnit(4)} className="unit-button">
            Final Examination
          </button>
          {openUnit === 4 && (
            <div className="lesson-dropdown">
              <Link to="/units/Final" className="lesson-link">
                Final Exam{" "}
              {quizCompletedAlpha && (
                <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
              )}
            </Link>
      
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default UnitSet;
