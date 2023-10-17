const router = require('express').Router();
const {
  getAll,
  getOne,
  create,
  update,
  deleteOne
} = require('../../controllers/userController');


// /api/users
router.route('/').get(getAll).post(create);

// /api/users/:userId
router.route('/:userId').get(getOne).put(update).delete(deleteOne);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(create).delete(deleteOne);

module.exports = router;
