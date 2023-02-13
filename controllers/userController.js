const { User, Thought } = require("../models");

module.exports = {
  //GET all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //GET single user by _id with thought and friend data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //PUT to update a user by _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    )
      .then((updatedUser) =>
        !updatedUser
          ? res.status(404).json({
              message: "Sorry, no user with that ID. Please try again.",
            })
          : res.json(updatedUser)
      )
      .catch((err) => res.status(500).json(err));
  },

  //DELETE to remove user by its _id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "Sorry, no user with that ID" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({
          message: "User and associated thoughts successfully deleted!",
        })
      )
      .catch((err) => res.status(500).json(err));
  },

  //POST to add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((updatedFriendData) => {
        if (!updatedFriendData) {
          return res.status(404).json({ message: "User(s) not found" });
        }
        return res.json(updatedFriendData);
      })
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((updatedFriendData) => {
        if (!updatedFriendData) {
          return res.status(404).json({ message: "User(s) not found" });
        }
        return res.json(updatedFriendData);
      })
      .catch((err) => res.status(500).json(err));
  },
};
