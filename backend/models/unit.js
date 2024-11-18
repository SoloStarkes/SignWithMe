const mongoose = require('mongoose')
const {Int32, Decimal128} = require("mongodb");

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 500
    },
    progress: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
}, { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema)