const router = require('express').Router();
const {
  getAll,
  getOne,
  create,
  createReaction,
  update,
  deleteOne,
  deleteReaction
} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/').get(getAll).post(create);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOne).put(update).delete(deleteOne);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').post(createReaction).delete(deleteReaction)

module.exports = router;
