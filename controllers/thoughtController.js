const { Thought, User } = require('../models');

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
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      .populate('reactions');

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
      // Deconstruct the json obj sent in the req.body
      const { thoughtText, username } = req.body;

      // Create the new thought
      const newThought = new Thought({
        thoughtText,
        username,
      });

      // Save the thought to the database
      const savedThought = await newThought.save();

      // Push the created thought's _id to the associated user's thoughts array field
      const user = await User.findOneAndUpdate(
        { username },
        { $push: { thoughts: savedThought._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this ID!' });
      }

      res.status(200).json(savedThought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Add a reaction
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true },
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID!' });
      }

      res.status(200).json(thought);
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

      await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: req.params.thoughtId } },
        { runValidators: true, new: true },
      );

      res.status(200).json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Delete a reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true },
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this ID!" });
      }

      res.status(200).json(thought);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
};