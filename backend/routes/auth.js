const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log('Got request: ' + req.statusCode);
    if (req.headers.authorization){
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
        const [username, password] = credentials.split(":");
        console.log(username + ":" + password);
        // first search for usernam in collection users
    }
});

module.exports = router;