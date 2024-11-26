const path = require('path');
const express = require('express');
const router = express.Router({ mergeParams: true });
const authUserFunction = require('../utils/authUtils');

router.use(authUserFunction.authUser);


router.get('/',authUserFunction.authUser, (req, res) => {

});

router.get('/:lessonId', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/src/index.js"));
});

module.exports = router;