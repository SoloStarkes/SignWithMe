const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    unitId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
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