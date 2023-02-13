const { User, Thought } = require("../models");

module.exports = {
  //GET all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
    //     const formattedThoughts = thoughts.map((thought) => ({
    //       _id: thought._id,
    //       thoughtText: thought.thoughtText,
    //       username: thought.username,
    //       reactions: thought.reactions,
    //       reactionCount: thought.reactionCount,
    //       created_at: thought.created_at
    //     }));
    //     res.json(formattedThoughts);
    //   })
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

  //DELETE to remove thought

  //POST reaction in thought's reactions array

  //DELETE to pull and remove aa reaction by reactionID
};
