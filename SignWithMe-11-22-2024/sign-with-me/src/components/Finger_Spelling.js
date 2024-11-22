import React, { useState, useEffect } from 'react';
import './Finger_Spelling.css';
import A from '../Letters/ASLAlphabetPoster_A.webp.png';
import B from '../Letters/ASLAlphabetPoster_B.webp.png';
import C from '../Letters/ASLAlphabetPoster_C.webp.png';
import D from '../Letters/ASLAlphabetPoster_D.webp.png';
import E from '../Letters/ASLAlphabetPoster_E.webp.png';
import F from '../Letters/ASLAlphabetPoster_F.webp.png';
import G from '../Letters/ASLAlphabetPoster_G.webp.png';
import H from '../Letters/ASLAlphabetPoster_H.webp.png';
import I from '../Letters/ASLAlphabetPoster_I.webp.png';
import J from '../Letters/ASLAlphabetPoster_J.webp.png';
import K from '../Letters/ASLAlphabetPoster_K.webp.png';
import L from '../Letters/ASLAlphabetPoster_L.webp.png';
import M from '../Letters/ASLAlphabetPoster_M.webp.png';
import N from '../Letters/ASLAlphabetPoster_N.webp.png';
import O from '../Letters/ASLAlphabetPoster_O.webp.png';
import P from '../Letters/ASLAlphabetPoster_P.webp.png';
import Q from '../Letters/ASLAlphabetPoster_Q.webp.png';
import R from '../Letters/ASLAlphabetPoster_R.webp.png';
import S from '../Letters/ASLAlphabetPoster_S.webp.png';
import T from '../Letters/ASLAlphabetPoster_T.webp.png';
import U from '../Letters/ASLAlphabetPoster_U.webp.png';
import V from '../Letters/ASLAlphabetPoster_V.webp.png';
import W from '../Letters/ASLAlphabetPoster_W.webp.png';
import X from '../Letters/ASLAlphabetPoster_X.webp.png';
import Y from '../Letters/ASLAlphabetPoster_Y.webp.png';
import Z from '../Letters/ASLAlphabetPoster_Z.webp.png';

const words = ['BAT', 'MORNING', 'ORANGE']; // Target words

const Finger_Spelling = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [popupMessage, setPopupMessage] = useState('');
  const [finalMessage, setFinalMessage] = useState('');
  const [slots, setSlots] = useState([]);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    initializeGame();
  }, [currentWordIndex]);

  const initializeGame = () => {
    setPopupMessage('');
    setFinalMessage('');
    setSlots(
      currentWord.split('').map((letter) => ({
        letter,
        filled: false,
        incorrect: false,
        correct: false,
      }))
    );
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedLetter = e.dataTransfer.getData('text/plain');
    
    setSlots((prevSlots) => {
      const newSlots = [...prevSlots];
      const slot = newSlots[index];
  
      if (slot.filled) return prevSlots; // Slot already filled
  
      if (draggedLetter === slot.letter) {
        slot.filled = true;
        slot.correct = true;
      } else {
        slot.incorrect = true;
        setTimeout(() => {
          setSlots((prevSlots) => {
            const updatedSlots = [...prevSlots];
            updatedSlots[index].incorrect = false;
            return updatedSlots;
          });
        }, 1000);
      }
      return newSlots;
    });
        // Use setTimeout to ensure state has updated before checking win condition
        setTimeout(checkWinCondition, 0);
    };
  
  
    const checkWinCondition = () => {
        const allFilled = slots.every((slot) => slot.filled && slot.correct);
      
        if (allFilled) {
          setScore((prevScore) => prevScore + 1);
          setPopupMessage('+1');
          setFinalMessage('✔ All Correct!');
      
          setTimeout(() => {
            if (currentWordIndex + 1 < words.length) {
              setCurrentWordIndex((prevIndex) => prevIndex + 1);
            } else {
              setFinalMessage('🎉 Game Completed!');
            }
          }, 1000);
        }
      };


    const renderDropSlots = () =>
     slots.map((slot, index) => (
      <div
        key={index}
        className={`drop-slot ${slot.incorrect ? 'incorrect' : ''} ${
          slot.filled ? 'correct' : ''
        }`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, index)}
      >
        {slot.filled && (
          <img
            src={letterImages[slot.letter]}
            alt={`ASL sign for ${slot.letter}`}
            className="slot-image"
          />
        )}
      </div>
    ));

  const letterImages = { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z };

  const renderASLPieces = () =>
    Object.keys(letterImages).map((letter) => (
      <div
        key={letter}
        className="alphabet-piece"
        draggable
        onDragStart={(e) => e.dataTransfer.setData('text/plain', letter)}
      >
        <img
          src={letterImages[letter]}
          alt={`ASL sign for ${letter}`}
          className="alphabet-image"
        />
      </div>
    ));

  return (
    <div>
      <header>
        <h1>ASL Drag-and-Drop Game</h1>
        <p>Drag the ASL signs to the correct boxes to spell the word!</p>
      </header>
      <main>
        <div id="target-word-container">
          <h2 id="target-word">{currentWord}</h2>
        </div>
        <div id="game-container">
          <div id="drop-zone" className="drop-zone">
            {renderDropSlots()}
          </div>
          <div id="alphabet-container2" className="alphabet-container2">
            {renderASLPieces()}
          </div>
        </div>
        <p id="feedback" className="feedback"></p>
        <div id="score-display">Score: {score}</div>
        {popupMessage && <div id="popup" className="popup">{popupMessage}</div>}
        {finalMessage && <div id="final-message">{finalMessage}</div>}
      </main>
    </div>
  );
};

export default Finger_Spelling;
