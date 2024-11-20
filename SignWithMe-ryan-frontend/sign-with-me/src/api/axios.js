import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Use .env or fallback to default
  timeout: 10000, // Optional: Set a timeout
});

export default API;
