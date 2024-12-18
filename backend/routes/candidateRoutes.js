const express = require('express');
const Candidate = require("../models/Candidate");

const router = express.Router();

router.post('/', async (req, res) => {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.json(candidate);
});

module.exports = router;