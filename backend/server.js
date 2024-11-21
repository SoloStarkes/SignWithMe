require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const unitRouter = require('./routes/units');
const lessonRouter = require('./routes/lessons');
const loginRouter = require('./routes/login');


const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => { console.warn(err) })
db.once('open', () => { console.log('Connected to the database') })

app.get('/api', (req, res) => {
    res.status(200).send('Hello!'); // must be replaced by path to landing page
});

app.use('/api/units', unitRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/login', loginRouter);

app.listen(port, () => {
    console.log(`Server started listening at port ${port}`)
});
