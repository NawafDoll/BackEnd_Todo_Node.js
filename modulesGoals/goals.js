const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("goals", schema);
