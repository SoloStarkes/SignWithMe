const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    lessonId: {
      type: String,
      required: true,
    },
    lessonName: {
      type: String,
      required: true,
    },
    unitId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    quiz_complete: {
      type: Boolean,
      default: false, // Default value is false
    },
  },
  {
    // Create a compound index for lessonId and userName combination
    indexes: [
      {
        fields: { lessonId: 1, userName: 1 },
        unique: true, // Ensures that lessonId + userName is unique
      },
    ],
  }
);

module.exports = mongoose.model('Lesson', lessonSchema);