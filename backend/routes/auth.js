const express = require('express');
const router = express.Router();


router.get('/authenticate', async (req, res) => {
    // console.log('Got request: ' + req.statusCode);
    if (req.headers.authorization){
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
        const [email, password] = credentials.split(":");
        console.log(email + ":" + password);
        // first search for username in collection users
        // if the username isn't found, send appropriate error
        // store sessionid in redis
    }
});

router.get('/', (req, res) => {
    // check if the sessionId + userId is in the Redis database
    // if session is already in
})

router.post('/create', (req, res) => {
    console.log('Creating a User!! ');

})

module.exports = router;