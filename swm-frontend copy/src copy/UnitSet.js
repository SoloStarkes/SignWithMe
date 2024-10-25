
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './UnitSet.css';

const Unit = ({ title, lessons }) => {
  const [isUnitOpen, setIsUnitOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsUnitOpen(!isUnitOpen)}>{title}</button>
      {isUnitOpen && (
        <ul>
          {lessons.map((lesson, index) => (
            <Lesson key={index} title={lesson.title} assignments={lesson.assignments} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Lesson = ({ title, assignments }) => {
  const [isLessonOpen, setIsLessonOpen] = useState(false);
  return (
    <li>
      <button onClick={() => setIsLessonOpen(!isLessonOpen)}>{title}</button>
      {isLessonOpen && (
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index}>
              {/* Use Link to navigate to the Alphabet page */}
              <Link to="src/Alphabet.js">{assignment}</Link>
              {/* <Link to="src/quiz.js">{assignment}</Link> */}

            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const UnitSet = () => {
  const units = [
    {
      title: 'Unit 1: Alphabet',
      lessons: [
        { title: 'Lesson 1.1', assignments: ['Assignment 1.1.1', 'Assignment 1.1.2'] },
        { title: 'Lesson 1.2', assignments: ['Assignment 1.2.1'] },
      ],
    },
    {
      title: 'Unit 2: Intermediate',
      lessons: [
        { title: 'Lesson 2.1', assignments: ['Assignment 2.1.1'] },
        { title: 'Lesson 2.2', assignments: ['Assignment 2.2.1', 'Assignment 2.2.2'] },
      ],
    },
    {
      title: 'Unit 3: Advanced',
      lessons: [
        { title: 'Lesson 3.1', assignments: ['Assignment 3.1.1'] },
        { title: 'Lesson 3.2', assignments: ['Assignment 3.2.1', 'Assignment 3.2.2'] },
      ],
    },
  ];

  return (
    <div>
      {units.map((unit, index) => (
        <Unit key={index} title={unit.title} lessons={unit.lessons} />
      ))}
    </div>
  );
};

export default UnitSet;
