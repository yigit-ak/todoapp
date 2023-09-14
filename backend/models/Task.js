const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  details: {
    type: String,
    default: "",
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  deadline: Date,
});

module.exports = mongoose.model("Task", TaskSchema);
