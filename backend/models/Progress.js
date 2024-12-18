const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Progress', ProgressSchema);
