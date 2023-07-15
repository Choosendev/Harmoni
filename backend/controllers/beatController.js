const asyncHandler = require('express-async-handler');
const Beat = require('../models/Beat');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBeats = asyncHandler(async (req, res, next) => {
  const bootcamps = await Beat.find();

  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc    create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBeat = asyncHandler(async (req, res, next) => {
  const bootcamp = await Beat.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc popular beats
// @route GET /api/beats
// @access Public
const getBeatsGenre = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get beats genre' });
});

module.exports = {
  getPopularBeats,
  getBeatsGenre,
};
