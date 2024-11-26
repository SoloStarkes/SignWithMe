import React, { useState, useEffect } from "react";
import imageA from "../Letters/A_Cropped.png";
import imageB from "../Letters/B_Cropped.png";
import imageC from "../Letters/ASLAlphabetPoster_C.webp.png";
import imageD from "../Letters/ASLAlphabetPoster_D.webp.png";
import imageCAT from "../Letters/ASL_CAT.webp";
import imageDOG from "../Letters/ASL_DOG1.webp";
import imageBEE from "../Letters/ASL_BEE.webp";
import imageANT from "../Letters/ASL_ANT.webp";
import "./Alphabet_Quiz.css";
import QuizCompletion from "./quizCompletion"; // Make sure to create this component
import Navbar from "./Navbar";
import axios from "axios"; // Import axios for making HTTP requests

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLevel1, setIsLevel1] = useState(true);
  const [level1Score, setLevel1Score] = useState(0);
  const [level2Score, setLevel2Score] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

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
      choices: [imageDOG, imageCAT, imageBEE, imageANT],
      correct: imageDOG,
    },
    {
      question: "Spell the word 'CAT'.",
      choices: [imageDOG, imageCAT, imageBEE, imageANT],
      correct: imageCAT,
    },
  ];

  useEffect(() => {
    setCurrentData(isLevel1 ? level1Data : level2Data);
    setCurrentQuestionIndex(0);
    setFeedback("");
  }, [isLevel1]);

  const handleAnswerChange = (selected) => {
    const currentQuestion = currentData[currentQuestionIndex];
    if (selected === currentQuestion.correct) {
      if (isLevel1) {
        setLevel1Score((prevScore) => prevScore + 1);
      } else {
        setLevel2Score((prevScore) => prevScore + 1);
      }
      setFeedback("Correct!");
    } else {
      setFeedback(
        `Incorrect! The correct answer was ${currentQuestion.correct}.`
      );
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < currentData.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(nextIndex);
        setFeedback("");
      }, 1000);
    } else {
      if (!isLevel1) {
        // Quiz is completed
        setQuizCompleted(true);
      } else {
        console.log("Level 1 finished");
      }
    }
  };

  const handleNextLevel = () => {
    setIsLevel1(false);
  };

  // Function to send an API request to update the lesson in the DB
  const updateLessonQuizCompletion = async (totalScore) => {
    try {
      const userName = localStorage.getItem("userName"); // Fetch logged-in user's username from localStorage
      const lessonId = "101"; // The lesson to check and update
      if (totalScore === 4) {
        await axios.put("http://localhost:5000/api/lessons/update-lesson", {
          lessonId: lessonId,
          userName: userName,
          quiz_complete: true,
        });
        console.log("Lesson updated successfully!");
      }
    } catch (error) {
      console.error("Error updating lesson:", error);
    }
  };

  if (quizCompleted) {
    const totalScore = level1Score + level2Score;
    updateLessonQuizCompletion(totalScore); // Update the lesson if score is 4
    return (
      <QuizCompletion
        score={totalScore}
        totalQuestions={level1Data.length + level2Data.length}
      />
    );
  }

  if (!currentData.length || !currentData[currentQuestionIndex]) {
    return <div>Loading...</div>;
  }

  const currentQuestion = currentData[currentQuestionIndex];

  return (
    <div
      className="Main_Div"
      style={{ paddingLeft: "15%", maxWidth: "600px", margin: "0 auto" }}
    >
      <h1 style={{ paddingRight: "30%" }}>ASL Quiz</h1>
      <p style={{ paddingLeft: "2%", fontSize: "25px" }}>
        {currentQuestion.question}
      </p>
      {currentQuestion.image && (
        <img
          src={currentQuestion.image}
          alt="ASL Sign"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}

      <div
        style={{
          paddingLeft: "10%",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswerChange(choice)}
            style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
          >
            {isLevel1 ? (
              choice
            ) : (
              <img
                src={choice}
                alt="ASL Choice"
                style={{ width: "250px", height: "100px" }}
              />
            )}
          </button>
        ))}
      </div>

      {feedback && (
        <div
          style={{
            marginLeft:'120px',
            marginTop: "20px",
            fontSize: "25px",
            fontWeight: "bold",
            color: "green",
          }}
        >
          {feedback}
        </div>
      )}

      {currentQuestionIndex < currentData.length - 1 && (
        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          style={{ marginLeft: "21%", marginTop: "20px" }}
        >
          Next Question
        </button>
      )}

      {isLevel1 && currentQuestionIndex === level1Data.length - 1 && (
        <button onClick={handleNextLevel} style={{ marginTop: "20px" }}>
          Next Level
        </button>
      )}

      <div style={{ marginTop: "20px", paddingLeft: "20%", fontSize: "25px" }}>
        <strong>Total Score: {level1Score + level2Score}</strong>
      </div>
    </div>
  );
}

export default Quiz;
