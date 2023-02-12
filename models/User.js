const mongoose = require("mongoose");
const thoughtSchema = require("./Thought");
const friendSchema = require("./Friend");

// Function to validate email Address
const validateEmail = function (email) {
  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regex.test(email);
};

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Please use a valid email address.",
    ],
    validate: [validateEmail, "Please use a valid email address."],
  },
  thoughts: [thoughtSchema],
  friends: [friendSchema],
});

const User = model("user", userSchema);

module.exports = User;