import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "./UnitSet.css";
import { Card, CardHeader, CardContent, CardTitle, CircularProgress } from "./Card";

const UnitSet = () => {
  const [openUnit, setOpenUnit] = useState(null); // Tracks which unit dropdown is open
  const [openLesson, setOpenLesson] = useState(null); // Tracks which lesson dropdown is open
  const [quizCompletedAlpha, setquizCompletedAlpha] = useState(true); // Tracks if the quiz for lesson 101 is completed
  const [quizCompletedFinger, setquizCompletedFinger] = useState(true); // Tracks if the quiz for lesson 102 is completed
  const [quizCompletedGreetings, setquizCompletedGreetings] = useState(true); // Tracks if the quiz for lesson 103 is completed
  const [quizCompletedGrammar, setquizCompletedGrammar] = useState(false); // Tracks if the quiz for lesson 201 is completed
  const [quizCompletedNounAdj, setquizCompletedNounAdj] = useState(false); // Tracks if the quiz for lesson 202 is completed
  const [quizCompletedVerbColors, setquizCompletedVerbColors] = useState(false); // Tracks if the quiz for lesson 203 is completed
  const [quizCompletedNumbers, setquizCompletedNumbers] = useState(false); // Tracks if the quiz for lesson 301 is completed

  const [unit1ExamComplete, setUnit1ExamCompleted] = useState(true);
  const [unit2ExamComplete, setUnit2ExamCompleted] = useState(false);
  const [unit3ExamComplete, setUnit3ExamCompleted] = useState(false);

  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [totalLessons, setTotalLessons] = useState(6);
  const [unitsCompleted, setUnitsCompleted] = useState(1);
  const [totalUnits, setTotalUnits] = useState(3);


  // Check if the user is signed in and retrieve their username
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    if (userName) {
      // Unit 1
      axios
        .get("http://localhost:5000/api/lessons/get-lesson", {
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
        .get("http://localhost:5000/api/lessons/get-lesson", {
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
        .get("http://localhost:5000/api/lessons/get-lesson", {
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
        .get("http://localhost:5000/api/lessons/get-lesson", {
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
            setquizCompletedGrammar(true);
          } else {
            console.log("Quiz Completed is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });

      axios
        .get("http://localhost:5000/api/lessons/get-lesson", {
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
        .get("http://localhost:5000/api/lessons/get-lesson", {
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

      // Unit 3
      axios
        .get("http://localhost:5000/api/lessons/get-lesson", {
          params: {
            lessonId: "301", // Lesson ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const lesson = response.data.lesson;
          console.log("Lesson Data:", lesson); // Log the fetched lesson
          if (lesson && lesson.quiz_complete) {
            console.log("Quiz Completed is true!"); // Confirm quiz status
            setquizCompletedNumbers(true);
          } else {
            console.log("Quiz Completed for Numbers is false or not set.");
          }
        })
        .catch((error) => {
          console.error("Error fetching lesson data:", error);
        });
    } else {
      setquizCompletedAlpha(false);
      setquizCompletedFinger(false);
      setquizCompletedGreetings(false);
      setquizCompletedGrammar(false);
      setquizCompletedNounAdj(false);
      setquizCompletedVerbColors(false);
      setquizCompletedNumbers(false);
    }
  }, [userName]);

  useEffect(() => {
    if (userName) {
      // Unit 1
      axios
        .get("http://localhost:5000/api/units/get-unit", {
          params: {
            unitId: "unit1", // Unit ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const unit = response.data; // Access the unit data directly
          console.log("Unit Data (Unit 1):", unit); // Log the fetched unit
          if (unit && unit.exam_complete) {
            console.log("Unit 1 Exam Completed is true!");
            setUnit1ExamCompleted(true);
          } else {
            console.log("Unit 1 Exam Completed is false or not set.");
            setUnit1ExamCompleted(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching unit data (Unit 1):", error);
        });

      // Unit 2
      axios
        .get("http://localhost:5000/api/units/get-unit", {
          params: {
            unitId: "unit2", // Unit ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const unit = response.data; // Access the unit data directly
          console.log("Unit Data (Unit 2):", unit); // Log the fetched unit
          if (unit && unit.exam_complete) {
            console.log("Unit 2 Exam Completed is true!");
            setUnit2ExamCompleted(true);
          } else {
            console.log("Unit 2 Exam Completed is false or not set.");
            setUnit2ExamCompleted(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching unit data (Unit 2):", error);
        });

      // Unit 3
      axios
        .get("http://localhost:5000/api/units/get-unit", {
          params: {
            unitId: "unit3", // Unit ID to check
            userName: userName, // The userName from local storage
          },
        })
        .then((response) => {
          const unit = response.data; // Access the unit data directly
          console.log("Unit Data (Unit 3):", unit); // Log the fetched unit
          if (unit && unit.exam_complete) {
            console.log("Unit 3 Exam Completed is true!");
            setUnit3ExamCompleted(true);
          } else {
            console.log("Unit 3 Exam Completed is false or not set.");
            setUnit3ExamCompleted(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching unit data (Unit 3):", error);
        });
    } else {
      // Reset unit progress if userName is not available
      setUnit1ExamCompleted(false);
      setUnit2ExamCompleted(false);
      setUnit3ExamCompleted(false);
    }
  }, [userName]);



  const toggleUnit = (unit) => {
    setOpenUnit(openUnit === unit ? null : unit);
    setOpenLesson(null); // Close any lesson dropdowns when toggling units
  };

  const toggleLesson = (lesson) => {
    setOpenLesson(openLesson === lesson ? null : lesson);
  };

  useEffect(() => {
    if (userName) {
      axios
      .get("http://localhost:5000/api/lessons/get-lessons", {
        params: {
          userName: userName,
        },
      })
      .then((response) => {
        const lessons = response.data; // Access the lessons array directly
        console.log("Lessons:", lessons);
        if (lessons) {
          setTotalLessons(lessons.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching lesson data:", error);
      });
    }
  }, [userName]);

  useEffect(() => {
  const calculateLessonsCompleted = () => {
    let completed = 0;
    if (quizCompletedAlpha) completed++;
    if (quizCompletedFinger) completed++;
    if (quizCompletedGreetings) completed++;
    if (quizCompletedGrammar) completed++;
    if (quizCompletedNounAdj) completed++;
    if (quizCompletedVerbColors) completed++;
    if (quizCompletedNumbers) completed++;
    setLessonsCompleted(completed);
  };
  calculateLessonsCompleted(); // Call the function whenever quiz statuses change
  }, [
    quizCompletedAlpha,
    quizCompletedFinger,
    quizCompletedGreetings,
    quizCompletedGrammar,
    quizCompletedNounAdj,
    quizCompletedVerbColors,
    quizCompletedNumbers,
  ]);

  useEffect(() => {
    if (userName) {
      axios
        .get("http://localhost:5000/api/units/get-units", {
          params: {
            userName: userName,
          },
        })
        .then((response) => {
          const units = response.data; // Access the units array directly
          console.log("Units:", units);
          if (units) {
            setTotalUnits(units.length);
          }
        })
        .catch((error) => {
          console.error("Error fetching unit data:", error);
        });
    }
  }, [userName]);

  useEffect(() => {
    const calculateUnitsCompleted = () => {
      let completed = 0;
      if (unit1ExamComplete) completed++;
      if (unit2ExamComplete) completed++;
      if (unit3ExamComplete) completed++;
      setUnitsCompleted(completed);
    };
    calculateUnitsCompleted(); // Call the function whenever unit exam statuses change
  }, [
      unit1ExamComplete,
      unit2ExamComplete,
      unit3ExamComplete]);

  return (
      <div className="unitset-container">
        {userName && (
      <>
        <h1>Welcome, {userName}!</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <CircularProgress
                value={(lessonsCompleted / totalLessons) * 100}
                label={`Lessons: ${lessonsCompleted}/${totalLessons}`}
              />
            <CircularProgress
              value={(unitsCompleted / totalUnits) * 100}
              label={`Units: ${unitsCompleted}/${totalUnits}`}
            />
          </CardContent>
        </Card>
      </>
    )}
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
            {quizCompletedGrammar &&
              quizCompletedNounAdj &&
              quizCompletedVerbColors && (
                <span style={{ color: "green", fontSize: "1.5rem" }}>✔</span>
              )}
          </button>
          {openUnit === 2 && (
            <div className="lesson-dropdown">
              <Link to="/units/lesson4" className="lesson-link">
                Grammer{" "}
                {quizCompletedGrammar && (
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

