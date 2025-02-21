// models/Ticket.js
import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  isUsed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who owns the ticket
  createdAt: { type: Date, default: Date.now },
  // Add other fields as necessary
});

const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;
