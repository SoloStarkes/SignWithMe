const express = require('express');
const Lesson = require('../models/lesson');
const { authUser } = require('../utils/authUtils');
const router = express.Router({ mergeParams: true });

// Get all lessons with progress for the logged-in user
router.get('/', authUser, async (req, res) => {
  try {
    const lessons = await Lesson.find({ userName: req.session.userId }).select('lessonName unitId quiz_complete');
    res.status(200).json(lessons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error retrieving lessons' });
  }
});

// Get progress for a specific lesson
router.get('/:lessonId', authUser, async (req, res) => {
  try {
    const lesson = await Lesson.findOne({ lessonId: req.params.lessonId, userName: req.session.userId });
    if (!lesson) {
      return res.status(404).json({ success: false, message: 'Lesson not found' });
    }
    res.status(200).json(lesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error retrieving lesson progress' });
  }
});

// Update progress for a specific lesson
router.patch('/:lessonId', authUser, async (req, res) => {
  try {
    const { quiz_complete } = req.body;
    const lesson = await Lesson.findOneAndUpdate(
      { lessonId: req.params.lessonId, userName: req.session.userId },
      { quiz_complete },
      { new: true }
    );
    if (!lesson) {
      return res.status(404).json({ success: false, message: 'Lesson not found' });
    }
    res.status(200).json({ success: true, message: 'Progress updated', lesson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating progress' });
  }
});

module.exports = router;
