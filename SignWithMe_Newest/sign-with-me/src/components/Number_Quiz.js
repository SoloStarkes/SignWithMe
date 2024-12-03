// import React, { useState, useEffect } from 'react';
// import './Number_Quiz.css';

// // Importing images statically for use in dynamic mapping
// import number0 from '../Letters/number00.png';
// import number1 from '../Letters/number01.png';
// import number2 from '../Letters/number02.png';
// import number3 from '../Letters/number03.png';
// import number4 from '../Letters/number04.png';
// import number5 from '../Letters/number05.png';
// import number6 from '../Letters/number06.png';
// import number7 from '../Letters/number07.png';
// import number8 from '../Letters/number08.png';
// import number9 from '../Letters/number09.png';
// import number10 from '../Letters/number10.gif';

// // Map of numbers to images
// const numberImages = {
//     0: number0,
//     1: number1,
//     2: number2,
//     3: number3,
//     4: number4,
//     5: number5,
//     6: number6,
//     7: number7,
//     8: number8,
//     9: number9,
//     10: number10,
// };
// // Utility function to shuffle an array
// const shuffleArray = (array) => {
//     const shuffled = [...array];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
// };

// const Number_Quiz = () => {
//     const [feedback, setFeedback] = useState('');
//     const [feedbackColor, setFeedbackColor] = useState(''); // to store feedback color
//     const [matchedCount, setMatchedCount] = useState(0);
//     const [randomNumbers, setRandomNumbers] = useState([]); // stores random numbers
//     const [shuffledImages, setShuffledImages] = useState([]); // stores shuffled images
//     const totalMatches = 5;

//     useEffect(() => {
//         // Generate 5 unique random numbers between 0 and 10
//         const generateRandomNumbers = () => {
//             const numbers = new Set();
//             while (numbers.size < 5) {
//                 numbers.add(Math.floor(Math.random() * 11));
//             }
//             const randomNumArray = [...numbers];
//             setRandomNumbers(randomNumArray);

//             // Shuffle images based on the selected random numbers
//             const selectedImages = randomNumArray.map((num) => numberImages[num]);
//             setShuffledImages(shuffleArray(selectedImages));
//         };

//         generateRandomNumbers();
//     }, []);

//     const handleDrop = (event, number, imageIndex) => {
//         event.preventDefault();
//         const draggedNumber = event.dataTransfer.getData("text/plain");

//         // Check if the dragged number matches the drop zone's number
//         if (draggedNumber === number.toString()) {
//             setMatchedCount((prev) => prev + 1);
//             setFeedback('Correct!');
//             setFeedbackColor('green'); // Set color to green for correct
//         } else {
//             setFeedback('Incorrect number dropped! Try again.');
//             setFeedbackColor('red'); // Set color to red for incorrect
//         }

//         // Display success message if all matches are completed
//         if (matchedCount + 1 === totalMatches && draggedNumber === number.toString()) {
//             setFeedback('Well done! You matched all the numbers correctly!');
//             setFeedbackColor('green');
//         }
//     };

//     const handleDragStart = (event) => {
//         event.dataTransfer.setData("text/plain", event.target.id);
//     };

//     return (
//         <div className="number-quiz-container">
//             {/* ASL Number Matching Quiz Section */}
//             <section className="asl-quiz-section">
//                 <header className="quiz-header">
//                     <h1 className="quiz-title">ASL Number Matching Quiz</h1>
//                     <p className="quiz-description">Match the regular numbers to the correct ASL signs!</p>
//                     <button className="learn-button" onClick={() => window.location.href='/units/lesson7'}>Learn ASL Numbers</button>
//                 </header>

//                 <section className="matching-quiz-section">
//                     <div className="instructions">
//                         <p className="instruction-text">Drag and drop each number to its corresponding ASL number card.</p>
//                     </div>

//                     <div className="matching-container">
//                         {/* Numbers */}
//                         <div className="number-list">
//                             {randomNumbers.map((num) => (
//                                 <div
//                                     key={num}
//                                     className="draggable-number"
//                                     id={num.toString()}
//                                     draggable="true"
//                                     onDragStart={handleDragStart}
//                                 >
//                                     {num}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* ASL Signs */}
//                         <div className="asl-signs">
//                             {shuffledImages.map((image, index) => (
//                                 <div
//                                     key={index}
//                                     className="asl-dropzone"
//                                     onDrop={(e) => handleDrop(e, randomNumbers[index], index)}
//                                     onDragOver={(e) => e.preventDefault()}
//                                     data-match={randomNumbers[index]}
//                                 >
//                                     <img className="asl-image" src={image} alt={`ASL Sign`} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Feedback */}
//                     {feedback && (
//                         <div id="feedback_Number" className={`feedback-message ${feedbackColor}`}>
//                             {feedback}
//                         </div>
//                     )}
//                 </section>
//             </section>
//         </div>
//     );
// };

// export default Number_Quiz;

import React, { useState, useEffect } from 'react';
import './Number_Quiz.css';

// Importing images statically for use in dynamic mapping
import number0 from '../Letters/number00.png';
import number1 from '../Letters/number01.png';
import number2 from '../Letters/number02.png';
import number3 from '../Letters/number03.png';
import number4 from '../Letters/number04.png';
import number5 from '../Letters/number05.png';
import number6 from '../Letters/number06.png';
import number7 from '../Letters/number07.png';
import number8 from '../Letters/number08.png';
import number9 from '../Letters/number09.png';
import number10 from '../Letters/number10.gif';

// Map of numbers to images
const numberImages = {
    0: number0,
    1: number1,
    2: number2,
    3: number3,
    4: number4,
    5: number5,
    6: number6,
    7: number7,
    8: number8,
    9: number9,
    10: number10,
};

const Number_Quiz = () => {
    const [feedback, setFeedback] = useState('');
    const [feedbackColor, setFeedbackColor] = useState(''); // to store feedback color
    const [matchedCount, setMatchedCount] = useState(0);
    const [randomNumbers, setRandomNumbers] = useState([]); // stores random numbers
    const totalMatches = 5;

    useEffect(() => {
        // Generate 5 unique random numbers between 0 and 10
        const generateRandomNumbers = () => {
            const numbers = new Set();
            while (numbers.size < 5) {
                numbers.add(Math.floor(Math.random() * 11));
            }
            setRandomNumbers([...numbers]);
        };

        generateRandomNumbers();
    }, []);

    const handleDrop = (event, number) => {
        event.preventDefault();
        const draggedNumber = event.dataTransfer.getData("text/plain");

        if (draggedNumber === number.toString()) {
            setMatchedCount((prev) => prev + 1);
            setFeedback('Correct!');
            setFeedbackColor('green'); // Set color to green for correct
        } else {
            setFeedback('Incorrect number dropped! Try again.');
            setFeedbackColor('red'); // Set color to red for incorrect
        }

        if (matchedCount + 1 === totalMatches && draggedNumber === number.toString()) {
            setFeedback('Well done! You matched all the numbers correctly!');
            setFeedbackColor('green');
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
                    <h1 style={{color:'white'}} className="quiz-title">ASL Number Matching Quiz</h1>
                    <p style={{color:'white'}} className="quiz-description">Match the regular numbers to the correct ASL signs!</p>
                    <button className="learn-button" onClick={() => window.location.href='/units/lesson7'}>Learn ASL Numbers</button>
                </header>

                <section className="matching-quiz-section">
                    <div className="instructions">
                        <p className="instruction-text">Drag and drop each number to its corresponding ASL number card.</p>
                    </div>

                    <div className="matching-container">
                        {/* Numbers */}
                        <div className="number-list">
                            {randomNumbers.map(num => (
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
                            {randomNumbers.map(num => (
                                <div
                                    key={num}
                                    className="asl-dropzone"
                                    onDrop={(e) => handleDrop(e, num)}
                                    onDragOver={(e) => e.preventDefault()}
                                    data-match={num}
                                >
                                    <img className="asl-image" src={numberImages[num]} alt={`ASL Sign for ${num}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feedback */}
                    {feedback && (
                        <div id="feedback_Number" className={`feedback-message ${feedbackColor}`}>
                            {feedback}
                        </div>
                    )}
                </section>
            </section>
        </div>
    );
};

export default Number_Quiz;
