const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rollid: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 4 },
  score: [{ type: Number }],
  task0: [{ type: Number }],
});

userSchema.plugin(uniqueValidator);

module.exports = new mongoose.model("Fresher", userSchema);
