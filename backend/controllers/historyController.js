// src/controllers/historyController.js
const History = require('../models/History');

// Get all history entries
const getHistory = async (req, res) => {
  try {
    const historyEntries = await History.find();
    res.json(historyEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch history', error: error.message });
  }
};

// Add a new history entry
const addHistory = async (req, res) => {
  const { entry } = req.body; // Adjust this according to your schema

  try {
    const newHistoryEntry = new History({ entry });
    const savedEntry = await newHistoryEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create history entry', error: error.message });
  }
};

// Delete a history entry
const deleteHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEntry = await History.findByIdAndDelete(id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'History entry not found' });
    }
    res.json({ message: 'History entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete history entry', error: error.message });
  }
};

module.exports = {
  getHistory,
  addHistory,
  deleteHistory,
};
