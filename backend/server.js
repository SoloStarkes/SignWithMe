require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import the auth routes
const authRoutes = require("./routes/authcall");

// Import the lesson routes
const lessonRoutes = require("./routes/lessonRoutes"); // Add this line to import lesson routes

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Landing route
app.get("/", (req, res) => {
  res.status(200).send("A different message!"); // Replace with path to landing page
});

// Use the auth routes
app.use("/api", authRoutes);

// Use the lesson routes
app.use("/api/lessons", lessonRoutes); // Add this line to use lesson routes

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started listening at port ${port}`);
});
