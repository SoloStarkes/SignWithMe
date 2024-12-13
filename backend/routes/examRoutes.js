// Assuming you're using express and mongoose
const express = require("express");
const router = express.Router();
const Exam = require("../models/exam"); // Import your exam model
// Update exam route
router.put("/update-exam", async (req, res) => {
  const { examId, userName, progress } = req.body;
  try {
    // Log the request body for debugging
    console.log("Request Body:", req.body);
    // Find and update the Exam
    const updatedExam = await Exam.findOneAndUpdate(
      { examId, userName },
      { progress },
      { new: true } // Return the updated document
    );
    if (!updatedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }
    res.status(200).json({ message: "Exam updated successfully", updatedExam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});
// Get Exam route (retrieve Exam based on ExamId and userName)
router.get("/get-exam", async (req, res) => {
  const { examId, userName } = req.query;
  try {
    console.log("Request Query:", req.query); // Log incoming query params
    // Find the Exam by ExamId and userName
    const exam = await Exam.findOne({ examId, userName });
    if (!exam) {
      console.log(
        "Exam not found for examId:",
        examId,
        "and userName:",
        userName
      );
      return res.status(404).json({ message: "Exam not found" });
    }
    // Log the exam found in the database
    console.log("Exam found:", exam);
    res.status(200).json({ exam });
  } catch (error) {
    console.error("Error fetching exam:", error);
    res.status(500).json({ message: "Server error", error });
  }
});
module.exports = router;
