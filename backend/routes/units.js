const express = require('express')
const path = require('path');
const Unit = require('../models/unit')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const units = await Unit.find().select('title');
        res.status(200).json(units);
    }
    catch (err) {
        console.error(err);
    }
})

router.get('/:unitId', async (req, res) => {
    try {
        const unit = await Unit.findById(req.params.id);
        res.status(400).json(unit);
    }
    catch (error) {
        console.warn(error);
    }
})

// endpoint to return progress
// dependent on if the user is logged in
// endpoint to modify progress

module.exports = router;
