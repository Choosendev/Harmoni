const mongoose = require('mongoose');

const BeatSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  producer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // description: {
  //   type: String,
  //   required: true,
  // },
  beats: [
    {
      title: {
        type: String,
        required: true,
      },
      fileURL: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      genre: {
        type: [String],
        required: [true, 'Please choose genre'],
        enum: [
          'Afrobeats',
          'Amapiano',
          'R & B/Soul',
          'Hip Hop',
          'Pop',
          'Electronic',
          'Reggaeton',
          'KPop',
        ],
      },
    },
  ],
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  price: {
    type: Number,
    require: true,
  },
  collaborationPreferences: {
    type: String,
    enum: ['Open', 'Closed'],
    default: 'Open',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Beat', BeatSchema);
