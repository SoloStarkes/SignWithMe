const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    lessonId: {
        type: Number,
        required: true
    },
    question_title: {
        type: String,
        required: true
    },
    question_content: {
        type: Buffer,
        required: false
    },
    all_options: { // need to work on how to store the options
      type: Array,
      required: true
    },
    all_options_content: {
      type: Buffer,
      required: false
    },
    progress: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 100
    }
});

module.exports = mongoose.model('Lesson', lessonSchema);