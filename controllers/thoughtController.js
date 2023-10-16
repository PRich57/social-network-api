// const { Thought } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      res.status(200).json({ message: 'Get all thoughts' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async getOne(req, res) {
    try {
      res.status(200).json({ message: 'Get one thought' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async create(req, res) {
    try {
      res.status(200).json({ message: 'Create thought' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async update(req, res) {
    try {
      res.status(200).json({ message: 'Update thought' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async deleteOne(req, res) {
    try {
      res.status(200).json({ message: 'Delete thought' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
}