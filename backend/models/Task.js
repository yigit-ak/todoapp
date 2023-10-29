const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  description: {
    type: String,
    maxLength: 255,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  starred: {
    type: Boolean,
    default: false,
  },
  deadline: {
    type: Date,
  },
  dateAssigned: {
    type: Date,
  },
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
});

module.exports = mongoose.model("Task", TaskSchema);
