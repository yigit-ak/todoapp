const express = require("express");
const app = express();
const connectDB = require("./database/connect");
require("dotenv").config();
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());
app.use((req, res, next) => {
  // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Set the allowed HTTP methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  // Set the allowed headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Allow credentials (e.g., cookies)
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Continue to the next middleware
  next();
});

// routes
app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
