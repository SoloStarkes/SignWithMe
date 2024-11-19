require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;


app.get('/', (req, res) => {
    res.status(200).send('Hello!'); // must be replaced by path to landing page
});

app.listen(port, () => {
    console.log(`Server started listening at port ${port}`)
});
