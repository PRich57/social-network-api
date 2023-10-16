const { Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getAll(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Get one thought
  async getOne(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID!' });
      }

      res.status(200).json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Create a thought
  async create(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.status(200).json(newThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Update a thought
  async update(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID!'});
      }

      res.status(200).json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteOne(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID!'})
      }

      res.status(200).json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};