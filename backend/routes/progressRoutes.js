const express = require('express');
const Progress = require("../models/Progress");

const router = express.Router();

router.get('/', async (req, res) => {
    const progress = await Progress.find();
    res.json(progress);
  });

module.exports = router;