import React, { useState } from 'react';
// import './numbers_styles.css'; // Assuming you have the CSS file in the same directory

const aslImages = [
    { src: 'images/asl-0.png', alt: 'ASL Number 0', instructions: 'To sign 0, form a circle with your thumb and index finger while keeping your other fingers straight.' },
    { src: 'images/asl-1.png', alt: 'ASL Number 1', instructions: 'To sign 1, raise your index finger.' },
    { src: 'images/asl-2.png', alt: 'ASL Number 2', instructions: 'To sign 2, raise your index and middle fingers.' },
    // Add more images and instructions as needed
];

const LearnASLNumbers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % aslImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + aslImages.length) % aslImages.length);
    };

    return (
        <div>
            {/* Main Content */}
            <header>
                <h1>Learn ASL Numbers</h1>
                <p>Learn how to sign numbers in American Sign Language (ASL) from 0 to 35!</p>
            </header>

            {/* Slideshow Container */}
            <section className="slideshow">
                <div className="slide">
                    <img id="asl-slide" src={aslImages[currentIndex].src} alt={aslImages[currentIndex].alt} />
                </div>
                <button id="prev-btn" onClick={prevSlide}>Previous</button>
                <button id="next-btn" onClick={nextSlide}>Next</button>
            </section>

            {/* Instructions */}
            <aside className="instructions">
                <h2>How to Sign</h2>
                <p id="instructions-text">{aslImages[currentIndex].instructions}</p>
            </aside>

            {/* Footer Navigation */}
            <footer>
                <a href="quiz.html">Take the ASL Quiz</a>
            </footer>
        </div>
    );
};

export default LearnASLNumbers;
