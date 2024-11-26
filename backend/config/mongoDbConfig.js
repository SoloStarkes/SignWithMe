require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => { console.warn(err) })
db.once('open', () => { console.log('Connected to the MongoDB database') });

module.exports = db;

