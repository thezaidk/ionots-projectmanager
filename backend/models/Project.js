const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "Pending" },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);