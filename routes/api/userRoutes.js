const router = require('express').Router();
const {
  getAll,
  getOne,
  create,
  createFriend,
  update,
  deleteOne,
  deleteFriend
} = require('../../controllers/userController');


// http://localhost:3001/api/users
router.route('/').get(getAll).post(create);

// http://localhost:3001/api/users/:userId
router.route('/:userId').get(getOne).put(update).delete(deleteOne);

// http://localhost:3001/api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;
