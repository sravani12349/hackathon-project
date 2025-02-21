const express = require('express');
const Ticket = require('../models/Ticket'); // Import the Ticket model
const router = express.Router();

// GET ticket by ID
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ticket details' });
  }
});

module.exports = router;



