const express = require('express')
const path = require("path");
const router = express.Router()


router.get('/units', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/sign-with-me/src/components/Units.js"));
})

router.get('/units/{unitID}', (req, res) => {
    res.sendFile(path.join(__dirname, "swm-frontend copy/sign-with-me/src/components/Units.js"));
})
