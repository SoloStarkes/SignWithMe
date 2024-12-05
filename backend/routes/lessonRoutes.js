// Assuming you're using express and mongoose

const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson"); // Import your lesson model

// Update lesson route
router.put("/update-lesson", async (req, res) => {
  const { lessonId, userName, quiz_complete } = req.body;

  try {
    // Log the request body for debugging
    console.log("Request Body:", req.body);

    // Find and update the lesson
    const updatedLesson = await Lesson.findOneAndUpdate(
      { lessonId, userName },
      { quiz_complete },
      { new: true } // Return the updated document
    );

    if (!updatedLesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.status(200).json({ message: "Lesson updated successfully", updatedLesson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

// Get lesson route (retrieve lesson based on lessonId and userName)
router.get("/get-lesson", async (req, res) => {
  const { lessonId, userName } = req.query;

  try {
    console.log("Request Query:", req.query); // Log incoming query params

    // Find the lesson by lessonId and userName
    const lesson = await Lesson.findOne({ lessonId, userName });

    if (!lesson) {
      console.log(
        "Lesson not found for lessonId:",
        lessonId,
        "and userName:",
        userName
      );
      return res.status(404).json({ message: "Lesson not found" });
    }

    // Log the lesson found in the database
    console.log("Lesson found:", lesson);

    res.status(200).json({ lesson });
  } catch (error) {
    console.error("Error fetching lesson:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/get-lessons", async (req, res) => {
  const userName  = req.query.userName;
  let lessons;
  try {
    lessons = await Lesson.find({ userName });
    if (!lessons) {
      return res.status(404).json({ message: `Lesson not found for user ${userName}` });
    }
    console.log(`Username: ${userName}`);
    console.log(`Lessons Size: ${lessons.length}`);
    return res.status(200).json(lessons);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    res.status(500).json({ message: "Server error", error });
  }
})

module.exports = router;
