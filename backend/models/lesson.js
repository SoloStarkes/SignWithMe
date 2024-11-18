const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,

    }
})