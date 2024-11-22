require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoDbClient = require('./config/mongoDbConfig');
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
