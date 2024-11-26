const Lesson = require('./lesson.js')
const mongoose = require('mongoose');
const {Int32, Decimal128} = require("mongodb");

const unitSchema = new mongoose.Schema(
  {
    unitId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    unitName: {
      type: String,
      required: true,
    },
    exam_complete: {
      type: Boolean,
      default: false, // Default value is false
    },
  },
  {
    // Create a compound index for unitId and userName combination
    indexes: [
      {
        fields: { unitId: 1, userName: 1 },
        unique: true, // Ensures that unitId + userName is unique
      },
    ],
  }
);

module.exports = mongoose.model('Unit', unitSchema);