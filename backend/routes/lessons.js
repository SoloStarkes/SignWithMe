const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/src/index.js"));
});

router.get('/:lessonId', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/src/index.js"));
});

module.exports = router;