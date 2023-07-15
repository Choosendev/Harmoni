const express = require('express');
const router = express.Router();
const { getBeats, createBeat } = require('../controllers/beatController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getBeats).post(createBeat);

module.exports = router;
