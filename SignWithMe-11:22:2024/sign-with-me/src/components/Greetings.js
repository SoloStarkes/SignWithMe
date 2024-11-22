import React, { useState } from 'react';
import './Greetings.css'; // Assuming you want to keep your styles in a separate CSS file

const Greetings = () => {
  const [feedback, setFeedback] = useState('');

  const giveFeedback = (greeting) => {
    const feedbackMessages = {
      hello: 'Great job! You signed "Hello" correctly.',
      'good-morning': 'Well done! "Good Morning" is correct.',
      'how-are-you': 'Nice work! You signed "How Are You?" correctly.',
      goodbye: 'Perfect! You signed "Goodbye" correctly.',
      'see-you-later': 'Excellent! "See You Later" is right!',
    };

    if (feedbackMessages[greeting]) {
      setFeedback(feedbackMessages[greeting]);
    } else {
      setFeedback('Oops! Please try again.');
    }
  };

  return (
    <div>
      <header>
        <h1>Let's Practice ASL Greetings!</h1>
        <p>Learn and practice American Sign Language (ASL) greetings with tips and visual aids!</p>
      </header>

      <main id="practice-container">
        {/* Practice Section for "Hello" */}
        <div className="practice-section">
          <h2>Practice 1: "Hello"</h2>
          <div className="gif-container">
            <img
              id="hello-gif"
              src="https://assistivetechnologyblog.com/wp-content/uploads/2017/03/giphy.gif"
              alt="Hello in ASL"
            />
          </div>
          <div className="tips">
            <h3>Tips:</h3>
            <p>Start with your dominant hand in a fist, then open your fingers slightly and move your hand from your forehead outward.</p>
          </div>
          {/* <button className="submit-btn" onClick={() => giveFeedback('hello')}>Submit</button> */}
          <p id="feedback">{feedback}</p>
        </div>

        {/* Practice Section for "Good Morning" */}
        <div className="practice-section">
          <h2>Practice 2: "Good Morning"</h2>
          <div className="gif-container">
            <img
              id="good-morning-gif"
              src="https://media.giphy.com/media/sitxzpEkJfKPzTEsFS/giphy.gif"
              alt="Good Morning in ASL"
            />
          </div>
          <div className="tips">
            <h3>Tips:</h3>
            <p>Start with your right hand in a fist, then place your thumb under your chin and move it away from your face.</p>
          </div>
          {/* <button className="submit-btn" onClick={() => giveFeedback('good-morning')}>Submit</button> */}
          <p id="feedback">{feedback}</p>
        </div>

        {/* Practice Section for "How Are You?" */}
        <div className="practice-section">
          <h2>Practice 3: "How Are You?"</h2>
          <div className="gif-container">
            <img
              id="how-are-you-gif"
              src="https://media.giphy.com/media/26FLgm33ve3iUexZC/giphy.gif"
              alt="How Are You in ASL"
            />
          </div>
          <div className="tips">
            <h3>Tips:</h3>
            <p>Place both hands with fingers spread, facing each other, then move them apart in a circular motion.</p>
          </div>
          {/* <button className="submit-btn" onClick={() => giveFeedback('how-are-you')}>Submit</button> */}
          <p id="feedback">{feedback}</p>
        </div>

        {/* Practice Section for "Goodbye" */}
        <div className="practice-section">
          <h2>Practice 4: "Goodbye"</h2>
          <div className="gif-container">
            <img
              id="goodbye-gif"
              src="https://media.giphy.com/media/3o7TKzb3i29i86BPJm/giphy.gif"
              alt="Goodbye in ASL"
            />
          </div>
          <div className="tips">
            <h3>Tips:</h3>
            <p>To say goodbye, wave your hand with your fingers spread. You can do this by simply extending your fingers and waving them side to side.</p>
          </div>
          {/* <button className="submit-btn" onClick={() => giveFeedback('goodbye')}>Submit</button> */}
          <p id="feedback">{feedback}</p>
        </div>

        {/* Practice Section for "See You Later" */}
        <div className="practice-section">
          <h2>Practice 5: "See You Later"</h2>
          <div className="gif-container">
            <img
              id="see-you-later-gif"
              src="https://media.giphy.com/media/l0MYHTyMzMRcikIxi/giphy.gif"
              alt="See You Later in ASL"
            />
          </div>
          <div className="tips">
            <h3>Tips:</h3>
            <p>To say "See You Later," you can wave your hand from side to side or use the "peace" sign and then make a slight wave.</p>
          </div>
          {/* <button className="submit-btn" onClick={() => giveFeedback('see-you-later')}>Submit</button> */}
          <p id="feedback">{feedback}</p>
        </div>
      </main>

      <footer>
        <p>Practice makes perfect! Keep practicing your ASL skills daily!</p>
      </footer>
    </div>
  );
};

export default Greetings;
