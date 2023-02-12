const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: String,
    required: true,
  },
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("createdAtFormatted").get(function () {
  return this.createdAt.toLocaleString();
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
