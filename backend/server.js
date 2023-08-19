const express = require('express');
const app = express();
const connectDB = require("./database/connect");
require('dotenv').config();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.use('/', tasks)

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