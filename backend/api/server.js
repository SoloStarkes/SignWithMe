require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const { MongoClient, ServerApiVersion } = require('mongodb');

// Import routes
const authRoutes = require("../routes/authcall");
const lessonRoutes = require("../routes/lessonRoutes");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

// CORS config
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(helmet({
  contentSecurityPolicy: false
}));

app.use(express.json());

// Make database accessible to route handlers
let mongoClientDB = null;

async function connectToMongo() {
  try {
    // MongoDB Atlas connection
    const connectionString = "mongodb+srv://swm-user:swmUserF24@signwithmedb.gl283.mongodb.net/signwithmedb?retryWrites=true&w=majority&appName=signwithmedb";
    const client = await MongoClient.connect(connectionString);
    // Get reference to the database
    mongoClientDB = client.db('signwithmedb'); // Replace with your Atlas database name
    app.locals.db = mongoClientDB; // Add this line to store db in app.locals
    return mongoClientDB;
  } catch (error) {
    console.error("Error initializing MongoDB Atlas Cluster:", error);
    process.exit(1);
  }
}

async function ping() {
  const _db = await connectToMongo();
  await _db.command({ ping: 1 });
  console.log(_db);
  console.log("Successfully connected to MongoDB Atlas!");
}

ping();

// Routes
app.get("/", (req, res) => {
  res.status(200).send("A different message!");
});

// Modify routes to use app.locals.db instead of mongoose models
app.use("/api", authRoutes);
app.use("/api/lessons", lessonRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Test route to verify database connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await app.locals.db.command({ ping: 1 });
    res.json({ message: "Database connected!", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started listening at port ${port}`);
});
