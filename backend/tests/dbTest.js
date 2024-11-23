const mongoose = require("mongoose");
require('dotenv').config({ path: '../.env' });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
const uri = process.env.DATABASE_CONNECTION_STRING;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Create and save a test user
    const testUser = new User({
      username: "testUser",
      email: "test@example.com",
      password: "hashedPassword123",
    });

    try {
      const savedUser = await testUser.save();
      console.log("User saved:", savedUser);
    } catch (err) {
      console.error("Error saving user:", err);
    }

    mongoose.connection.close(); // Close connection after test
  })
  .catch((err) => console.error("Database connection error:", err));
