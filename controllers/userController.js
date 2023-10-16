const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getAll(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Get one user
  async getOne(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        // Chain the select method so we can exclude the document version 
        .select('-__v');

        if (!user) {
          return res.status(404).json({ message: 'No user with this ID!'});
        }

      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Create a user
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Update a user
  async update(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this ID!' });
      }

      res.status(200).json({ message: 'Update user' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Delete user and associated thoughts
  async deleteOne(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with this ID!' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } })

      res.status(200).json({ message: 'User and associated thoughts successfully deleted!' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};