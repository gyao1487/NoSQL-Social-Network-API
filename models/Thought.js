const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => createdAtVal.toLocaleString(),
  },
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => createdAtVal.toLocaleString(),
  },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("createdAtFormatted").get(function () {
  return this.createdAt.toLocaleString();
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
