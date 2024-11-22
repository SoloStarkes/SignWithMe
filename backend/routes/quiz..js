const express = require('express');
const router = express.Router();

router.get('/:lessonId', (req, res) => {
    res.status(500).send('Login hasn\'t been implemented')
});

module.exports = router;