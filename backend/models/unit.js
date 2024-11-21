const Lesson = require('./lesson.js')
const mongoose = require('mongoose');
const {Int32, Decimal128} = require("mongodb");

const unitSchema = new mongoose.Schema({
    unitId: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lessons: {
        type: Array,
        required: true
    },
    progress: {
        type: Number,
        required: false,
        min: 0,
        max: 100,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema);