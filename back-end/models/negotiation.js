const mongoose = require('mongoose');

const NegotiationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionData: { type: Array }, // details of each negotiation step
  strategiesUsed: { type: Array },
  outcomes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Negotiation', NegotiationSchema);
