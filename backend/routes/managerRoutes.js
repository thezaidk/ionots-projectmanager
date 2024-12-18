const express = require('express');
const Manager = require("../models/Manager");

const router = express.Router();

router.post('/', async (req, res) => {
    const manager = new Manager(req.body);
    await manager.save();
    res.json(manager);
});

module.exports = router;