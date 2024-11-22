// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./UnitSet.css";

// const UnitSet = () => {
//   const [openUnit, setOpenUnit] = useState(null);

//   const toggleUnit = (unit) => {
//     setOpenUnit(openUnit === unit ? null : unit);
//   };

//   return (
//     <div className="unitset-container">
//       <h1>Units</h1>
//       <div className="unitset-list">
        
        // {/* Unit 1 */}
        // <div>
        //   <button onClick={() => toggleUnit(1)} className="unit-button">
        //     Unit 1: Basics
        //   </button>
        //   {openUnit === 1 && (
        //     <div className="lesson-dropdown">
        //       <Link to="/units/unit1" className="lesson-link">Alphabet</Link>
        //       <Link to="/units/unit1/lesson2" className="lesson-link">Lesson 2</Link>
        //     </div>
        //   )}
        // </div>

//         {/* Unit 2 */}
//         <div>
//           <button onClick={() => toggleUnit(2)} className="unit-button">
//             Unit 2: Intermediate
//           </button>
//           {openUnit === 2 && (
//             <div className="lesson-dropdown">
//               <Link to="/units/unit2/alphabet" className="lesson-link">Alphabet</Link>
//               <Link to="/units/unit2/lesson2" className="lesson-link">Lesson 2</Link>
//             </div>
//           )}
//         </div>

//         {/* Unit 3 */}
//         <div>
//           <button onClick={() => toggleUnit(3)} className="unit-button">
//             Unit 3: Advanced
//           </button>
//           {openUnit === 3 && (
//             <div className="lesson-dropdown">
//               <Link to="/units/unit3/alphabet" className="lesson-link">Alphabet</Link>
//               <Link to="/units/unit3/lesson2" className="lesson-link">Lesson 2</Link>
//             </div>
//           )}
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default UnitSet;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UnitSet.css";

const UnitSet = () => {
  const [openUnit, setOpenUnit] = useState(null); // Tracks which unit dropdown is open
  const [openLesson, setOpenLesson] = useState(null); // Tracks which lesson dropdown is open

  const toggleUnit = (unit) => {
    setOpenUnit(openUnit === unit ? null : unit);
    setOpenLesson(null); // Close any lesson dropdowns when toggling units
  };

  const toggleLesson = (lesson) => {
    setOpenLesson(openLesson === lesson ? null : lesson);
  };

  return (
    <div className="unitset-container">
      <h1>Units</h1>
      <div className="unitset-list">
        {/* Unit 1 */}
        
                {/* Unit 1 */}
                <div>
          <button onClick={() => toggleUnit(1)} className="unit-button">
            Unit 1: Basics
          </button>
          {openUnit === 1 && (
            <div className="lesson-dropdown">
              <Link to="/units/lesson1" className="lesson-link">Alphabet</Link>
              <Link to="/units/lesson2" className="lesson-link">Finger Spelling </Link>
              <Link to="/units/lesson3" className="lesson-link">Greetings </Link>
            </div>
          )}
        </div>



        {/* <div>
          <button onClick={() => toggleUnit(1)} className="unit-button">
            Unit 1: Basics
          </button>
          {openUnit === 1 && (
            <div className="lesson-dropdown">
              <button
                onClick={() => toggleLesson("unit1-alphabet")}
                className="lesson-link"
              >
                Alphabet
              </button>
              {openLesson === "unit1-alphabet" && (
                <div className="sub-lesson-dropdown">
                  <Link to="/units/lesson1" className="lesson-link">
                    Learning ASL Letters
                  </Link>
                  <Link to="/units/lesson2" className="lesson-link">
                    Finger Spelling
                  </Link>
                </div>
              )}
              <Link to="/units/unit1/lesson2" className="lesson-link">Lesson 2</Link>
            </div>
          )}
        </div> */}

        {/* Unit 2 */}
        <div>
          <button onClick={() => toggleUnit(2)} className="unit-button">
            Unit 2: Intermediate
          </button>
          {openUnit === 2 && (
            <div className="lesson-dropdown">
              <button
                onClick={() => toggleLesson("unit2-alphabet")}
                className="lesson-link"
              >
                Alphabet
              </button>
              {openLesson === "unit2-alphabet" && (
                <div className="sub-lesson-dropdown">
                  <Link to="/units/unit2/alphabet" className="lesson-link">
                    Alphabet Overview
                  </Link>
                  <Link to="/units/unit2/alphabet/practice" className="lesson-link">
                    Practice Alphabet
                  </Link>
                </div>
              )}
              <Link to="/units/unit2/lesson2" className="lesson-link">Lesson 2</Link>
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
              <button
                onClick={() => toggleLesson("unit3-alphabet")}
                className="lesson-dropdown-button"
              >
                Alphabet
              </button>
              {openLesson === "unit3-alphabet" && (
                <div className="sub-lesson-dropdown">
                  <Link to="/units/unit3/alphabet" className="sub-lesson-link">
                    Alphabet Overview
                  </Link>
                  <Link to="/units/unit3/alphabet/practice" className="sub-lesson-link">
                    Practice Alphabet
                  </Link>
                </div>
              )}
              <Link to="/units/unit3/lesson2" className="lesson-link">Lesson 2</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitSet;
