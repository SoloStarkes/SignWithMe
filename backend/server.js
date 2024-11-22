require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const redisClient = require('./config/redisConfig');
const session = require('express-session');
const redisStore = require('connect-redis').default;

const unitRouter = require('./routes/units');
const lessonRouter = require('./routes/lessons');
const authRouter = require('./routes/auth');
const load_data = require('./utils/load_data')


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors);

// MongoDB Setup
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => { console.warn(err) })
db.once('open', () => { console.log('Connected to the database') })

app.use(
    session({
        store: new redisStore({ client: redisClient }),
        secret: process.env.SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

app.use('/api/units', unitRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/login', authRouter);

app.listen(port, () => {
    console.log(`Server started listening at port ${port}`)
});
