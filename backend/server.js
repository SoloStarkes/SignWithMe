require('dotenve').config()

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "sign-with-me/src/index.js"));
})


app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/sign-with-me/src/components/LoginPage.js"))
})


app.listen(port, () => {
    console.log(`Server started listening at port ${port}`)
})
