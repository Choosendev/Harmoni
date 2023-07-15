const express = require('express');
const router = express.Router();
const {
  getBeats,
  createBeat,
} = require('../../backend/controllers/beatController');

const { protect } = require('../../backend/middleware/authMiddleware');

router.route('/').get(getBeats).post(createBeat);

module.exports = router;
