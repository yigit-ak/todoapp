const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minLength: 1,
    maxLength: 30,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  color: {
    type: String,
    enum: [
      "PEACH",
      "ORANGE",
      "EGG",
      "LEAF",
      "PINE",
      "LAKE",
      "OCEAN",
      "LAVENDER",
      "LILAC",
      "CHERRY",
    ],
  },
  timesUsed: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("List", ListSchema);
