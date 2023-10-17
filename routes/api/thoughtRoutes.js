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


// :3001/api/thoughts
router.route('/').get(getAll).post(create);

// :3001/api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOne).put(update).delete(deleteOne);

// :3001/api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction)

// :3001/api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;
