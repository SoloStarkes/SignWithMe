const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(500).send('Login hasn\'t been implemented')
});

module.exports = router;