const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.get('/', async (req, res) => {
  const projects = await Project.find().populate('manager');
  res.json(projects);
});

router.post('/', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

module.exports = router;
