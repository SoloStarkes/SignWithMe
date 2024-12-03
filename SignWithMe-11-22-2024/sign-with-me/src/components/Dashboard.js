// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
//
// // Circular Progress Component
// const CircularProgress = ({ value, label, details }) => (
//   <div className="flex flex-col items-center">
//     <div className="relative w-32 h-32">
//       <svg className="w-full h-full" viewBox="0 0 100 100">
//         <circle
//           className="text-[#e9d5ff] stroke-current"
//           strokeWidth="10"
//           cx="50"
//           cy="50"
//           r="40"
//           fill="transparent"
//         ></circle>
//         <circle
//           className="text-[#8a2be2] progress-ring__circle stroke-current"
//           strokeWidth="10"
//           strokeLinecap="round"
//           cx="50"
//           cy="50"
//           r="40"
//           fill="transparent"
//           strokeDasharray={`${2 * Math.PI * 40}`}
//           strokeDashoffset={`${2 * Math.PI * 40 * (1 - value / 100)}`}
//           style={{
//             transition: 'stroke-dashoffset 0.35s',
//             transform: 'rotate(-90deg)',
//             transformOrigin: '50% 50%',
//           }}
//         ></circle>
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-2xl font-bold text-[#4b0082]">{Math.round(value)}%</span>
//       </div>
//     </div>
//     <span className="mt-2 text-lg font-semibold text-[#4b0082]">{label}</span>
//     <span className="text-sm text-[#8a2be2]">{details}</span>
//   </div>
// );
//
// const ActivityList = ({ activities }) => (
//   <ul className="space-y-4">
//     {activities.map((activity, index) => (
//       <li key={index} className="flex items-center">
//         <div className="w-2 h-2 bg-[#8a2be2] rounded-full mr-2"></div>
//         {activity}
//       </li>
//     ))}
//   </ul>
// );
//
// const Dashboard = ({ username }) => {
//   const [lessonsCompleted, setLessonsCompleted] = useState(0);
//   const [unitsCompleted, setUnitsCompleted] = useState(0);
//   const [totalLessons, setTotalLessons] = useState(0);
//   const [totalUnits, setTotalUnits] = useState(0);
//   const [recentActivities, setRecentActivities] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//
//   // Fetch lessons and units data
//   useEffect(() => {
//     if (username) {
//       fetchLessons(username);
//       fetchUnits(username);
//       fetchRecentActivities(username);
//     }
//   }, [username]);
//
//   const fetchLessons = async (userName) => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/get-lesson", {
//         params: { userName },
//       });
//       const lessons = response.data.lesson || [];
//       setLessonsCompleted(lessons.filter((lesson) => lesson.quiz_complete).length);
//       setTotalLessons(lessons.length);
//     } catch (error) {
//       setErrorMessage("Error fetching lessons.");
//       console.error(error);
//     }
//   };
//
//   const fetchUnits = async (userName) => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/get-unit", {
//         params: { userName },
//       });
//       const units = response.data.unit || [];
//       setUnitsCompleted(units.filter((unit) => unit.exam_complete).length);
//       setTotalUnits(units.length);
//     } catch (error) {
//       setErrorMessage("Error fetching units.");
//       console.error(error);
//     }
//   };
//
//   const fetchRecentActivities = async (userName) => {
//     // Simulating fetching of recent activities
//     // You can adjust this to get real data from your backend if needed
//     const activities = [
//       "Completed Lesson: Introduction to React",
//       "Started Unit: Advanced JavaScript",
//       "Earned Badge: JavaScript Fundamentals",
//       "Completed Quiz: CSS Flexbox",
//       "Started Lesson: RESTful API Design",
//     ];
//     setRecentActivities(activities);
//   };
//
//   return (
//     <div className="min-h-screen bg-[#f3e8ff]">
//       {/* Navbar */}
//       <nav className="bg-[#8a2be2] text-white p-4">
//         <div className="container mx-auto">
//           <span className="text-lg font-bold">Learning Dashboard</span>
//         </div>
//       </nav>
//
//       <main className="container mx-auto p-4">
//         <header className="mb-6">
//           <h1 className="text-3xl font-bold text-[#4b0082]">Welcome, {username}!</h1>
//         </header>
//
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           <Card className="col-span-1 md:col-span-2 lg:col-span-3">
//             <CardHeader>
//               <CardTitle>Your Progress</CardTitle>
//             </CardHeader>
//             <CardContent className="flex justify-center space-x-8">
//               <CircularProgress
//                 value={(lessonsCompleted / totalLessons) * 100}
//                 label="Lessons"
//                 details={`${lessonsCompleted}/${totalLessons}`}
//               />
//               <CircularProgress
//                 value={(unitsCompleted / totalUnits) * 100}
//                 label="Units"
//                 details={`${unitsCompleted}/${totalUnits}`}
//               />
//             </CardContent>
//           </Card>
//
//           <Card className="col-span-1 lg:col-span-2">
//             <CardHeader>
//               <CardTitle>Recent Activity</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ScrollArea className="h-[200px]">
//                 <ActivityList activities={recentActivities} />
//               </ScrollArea>
//             </CardContent>
//           </Card>
//
//           <Card className="col-span-1">
//             <CardHeader>
//               <CardTitle>Quick Stats</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2">
//                 <li>Total Lessons: {totalLessons}</li>
//                 <li>Lessons Completed: {lessonsCompleted}</li>
//                 <li>Total Units: {totalUnits}</li>
//                 <li>Units Completed: {unitsCompleted}</li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// };
//
// export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode library
import "./Dashboard.css";

const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [lessons, setLessons] = useState([]); // Ensure initial value is an empty array
    const [units, setUnits] = useState([]); // Ensure initial value is an empty array
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Decode the JWT token to extract the username
        const token = localStorage.getItem("token"); // Get token from localStorage
        if (token) {
            try {
                const decodedToken = jwtDecode(token); // Decode the JWT token
                setUsername(decodedToken.username); // Set the username from the token
                fetchLessons(decodedToken.username); // Fetch lessons for this user
                fetchUnits(decodedToken.username); // Fetch units for this user
            } catch (err) {
                setErrorMessage("Error decoding token.");
                console.error(err);
            }
        } else {
            setErrorMessage("User not authenticated!");
        }
    }, []);

    const fetchLessons = async (userName) => {
        try {
            const response = await axios.get("http://localhost:5000/api/lessons/get-lessons", {
                params: { userName }, // Send the username as query parameter
            });
            console.log(response.data); // Log the response for debugging
            setLessons(response.data.lesson || []); // Safely update state
        } catch (error) {
            setErrorMessage("Error fetching lessons.");
            console.error(error);
        }
    };

    const fetchUnits = async (userName) => {
        try {
            const response = await axios.get("http://localhost:5000/api/units/get-units", {
                params: { userName }, // Send the username as query parameter
            });
            console.log(response.data); // Log the response for debugging
            setUnits(response.data.unit || []); // Safely update state
        } catch (error) {
            setErrorMessage("Error fetching units.");
            console.error(error);
        }
    };

    return (
        <div className="main-container">
            <h1 id="main-title">Hello, {username}</h1> {/* Display username */}
            {errorMessage && <p>{errorMessage}</p>}

            <div className="completed-lessons-container">
                <h2>Completed Lessons</h2>
                <ul>
                    {lessons.length === 0 ? (
                        <li>No lessons completed yet.</li>
                    ) : (
                        lessons.map((lesson) => (
                            <li key={lesson.lessonId}>
                                {lesson.lessonName} - {lesson.quiz_complete ? "Completed" : "Not Completed"}
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <div className="completed-units-container">
                <h2>Completed Units</h2>
                <ul>
                    {units.length === 0 ? (
                        <li>No units completed yet.</li>
                    ) : (
                        units.map((unit) => (
                            <li key={unit.unitId}>
                                {unit.unitName} - {unit.exam_complete ? "Completed" : "Not Completed"}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;



