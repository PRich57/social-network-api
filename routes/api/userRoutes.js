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


// :3001/api/users
router.route('/').get(getAll).post(create);

// :3001/api/users/:userId
router.route('/:userId').get(getOne).put(update).delete(deleteOne);

// :3001/api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;
