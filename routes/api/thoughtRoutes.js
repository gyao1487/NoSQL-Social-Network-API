const router = require("express").Router();
const {
  addFriend,
  deleteFriend
} = require("../../controllers/userController");

// routes for /api/users
router.route('/').get(getUsers).post(createUser);

//routes for /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
