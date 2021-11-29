const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  index: { type: Number },
  data: [
    {
      fakename: { type: String, required: true },
      riddle: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
});

userSchema.plugin(uniqueValidator);

module.exports = new mongoose.model("Task", userSchema);
