const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require("../../controllers/thoughtController");

// routes for /api/thoughts
router.route('/').get(getThoughts).post(createThought)

//routes for /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

//routes for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(createReaction)
.delete(deleteReaction);

module.exports = router;
