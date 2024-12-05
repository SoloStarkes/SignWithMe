import React, { useState } from "react";
import "./Number_Quiz.css";
import axios from "axios"; // Make sure axios is imported

// Importing images statically for use in dynamic mapping
import number01 from "../Letters/number01.png";
import number02 from "../Letters/number02.png";
import number03 from "../Letters/number03.png";
import number04 from "../Letters/number04.png";
import number05 from "../Letters/number05.png";

// Map of numbers to images
const numberImages = {
  1: number01,
  2: number02,
  3: number03,
  4: number04,
  5: number05,
};

const Number_Quiz = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState(""); // to store feedback color
  const [matchedCount, setMatchedCount] = useState(0);
  const totalMatches = 5;

  const handleDrop = (event, number) => {
    event.preventDefault();
    const draggedNumber = event.dataTransfer.getData("text/plain");

    if (draggedNumber === number.toString()) {
      setMatchedCount((prev) => prev + 1);
      setFeedback("Correct!");
      setFeedbackColor("green"); // Set color to green for correct
    } else {
      setFeedback("Incorrect number dropped! Try again.");
      setFeedbackColor("red"); // Set color to red for incorrect
    }

    if (
      matchedCount + 1 === totalMatches &&
      draggedNumber === number.toString()
    ) {
      setFeedback("Well done! You matched all the numbers correctly!");
      setFeedbackColor("green");
      const userName = localStorage.getItem("userName");

      if (userName) {
        // Send a PUT request to update the lesson with quiz_complete = true
        axios
          .put("http://localhost:5000/api/lessons/update-lesson", {
            lessonId: "301",
            userName: userName,
            quiz_complete: true,
          })
          .then((response) => {
            console.log("Lesson updated:", response.data);
          })
          .catch((error) => {
            console.error("Error updating lesson:", error);
          });
      } else {
        console.error("User is not logged in, unable to update lesson.");
      }
    }
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  return (
    <div className="number-quiz-container">
      {/* ASL Number Matching Quiz Section */}
      <section className="asl-quiz-section">
        <header className="quiz-header">
          <h1 className="quiz-title">ASL Number Matching Quiz</h1>
          <p className="quiz-description">
            Match the regular numbers to the correct ASL signs!
          </p>
          <button
            className="learn-button"
            onClick={() => (window.location.href = "/units/lesson7")}
          >
            Learn ASL Numbers
          </button>
        </header>

        <section className="matching-quiz-section">
          <div className="instructions">
            <p className="instruction-text">
              Drag and drop each number to its corresponding ASL number card.
            </p>
          </div>

          <div className="matching-container">
            {/* Numbers */}
            <div className="number-list">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="draggable-number"
                  id={num.toString()}
                  draggable="true"
                  onDragStart={handleDragStart}
                >
                  {num}
                </div>
              ))}
            </div>

            {/* ASL Signs */}
            <div className="asl-signs">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="asl-dropzone"
                  onDrop={(e) => handleDrop(e, num)}
                  onDragOver={(e) => e.preventDefault()}
                  data-match={num}
                >
                  <img
                    className="asl-image"
                    src={numberImages[num]}
                    alt={`ASL Sign for ${num}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              id="feedback_Number"
              className={`feedback-message ${feedbackColor}`}
            >
              {feedback}
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Number_Quiz;
