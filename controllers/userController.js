// const { User } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      res.status(200).json({ message: 'Get all users' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async getOne(req, res) {
    try {
      res.status(200).json({ message: 'Get one user' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async create(req, res) {
    try {
      res.status(200).json({ message: 'Create user' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async update(req, res) {
    try {
      res.status(200).json({ message: 'Update user' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
  async delete(req, res) {
    try {
      res.status(200).json({ message: 'Delete user' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  
}