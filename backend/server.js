require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const mongoDbClient = require('./config/mongoDbConfig');
const redisClient = require('./config/redisConfig');
const session = require('express-session');
const redisStore = require('connect-redis').default;

const unitRouter = require('./routes/units');
const lessonRouter = require('./routes/lessons');
const authRouter = require('./routes/auth');


const port = 9000;

app.use(express.json());
app.use(logger("dev"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
    session({
        store: new redisStore({ client: redisClient }),
        secret: process.env.SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);

app.use('/api/progress/units', unitRouter);
app.use('/api/progress/lessons', lessonRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server started listening at port ${port}`)
});
