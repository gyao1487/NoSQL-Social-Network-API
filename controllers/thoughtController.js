const { User, Thought } = require("../models");

module.exports = {
  //GET all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  //GET single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: "No thoughts, head empty. You entered an incorrect id.",
            })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Post created, but found no user with that ID" })
          : res.json({ message: "Created the post 🎉" }, user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //PUT to update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    )
      .then((updatedThought) =>
        !updatedThought
          ? res.status(404).json({ message: "Sorry, no thought with this ID" })
          : res.json(updatedThought)
      )
      .catch((err) => res.status(500).json(err));
  },

  //DELETE to remove thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Sorry, no thought with that ID" })
          : res.send({ message: "Thought deleted successfullly!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  //POST reaction in thought's reactions array
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((reaction) => {
        !reaction
          ? res.status(404).json({ message: "Error - please try again!" })
          : res.json(reaction);
      })
      .catch((err) => res.status(500).json(err));
  },
  //DELETE to pull and remove aa reaction by reactionID
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {$pull: { reactions: {reactionId: req.body.reactionId}} },
      { new: true }
    )
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "Error- please try again" })
          : res.json({ message: "Successfully deleted reaction!", thought });
      })
      .catch((err) => res.status(500).json(err));
  },
};
