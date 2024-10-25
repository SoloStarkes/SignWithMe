import React from "react";
import "./Unit1.css";
import Navbar from "./Navbar";

const Unit1 = () => {
  return (
    <>
      <Navbar />
      <div className="unit1-container">
        <h1>Unit 1: Introductory Sign Language</h1>
        <p>
          Welcome to Unit 1! In this unit, we will cover the basics of sign
          language, including common signs, greetings, and essential vocabulary.
        </p>

        <div className="lesson">
          <h2>Lesson 1: Common Signs</h2>
          <p>Learn basic signs used in everyday conversations.</p>
          <ul>
            <li>Thank You</li>
            <li>Please</li>
            <li>Sorry</li>
            <li>Hello</li>
            <li>Goodbye</li>
          </ul>
        </div>

        <div className="lesson">
          <h2>Lesson 2: Greetings</h2>
          <p>Understand how to greet people in sign language.</p>
          <ul>
            <li>Good Morning</li>
            <li>Good Afternoon</li>
            <li>Good Evening</li>
            <li>How Are You?</li>
          </ul>
        </div>

        <div className="lesson">
          <h2>Lesson 3: Essential Vocabulary</h2>
          <p>Learn essential vocabulary that will help you communicate.</p>
          <ul>
            <li>Yes</li>
            <li>No</li>
            <li>Help</li>
            <li>More</li>
            <li>All Done</li>
          </ul>
        </div>

        <div className="lesson">
          <h2>Practice Exercises</h2>
          <p>Try these exercises to reinforce your learning:</p>
          <ul>
            <li>Sign the alphabet using ASL.</li>
            <li>Practice greeting a partner in sign language.</li>
            <li>Use the signs learned in a short conversation.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Unit1;
