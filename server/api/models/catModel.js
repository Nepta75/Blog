const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
  catName: {
    type: String,
    required: 'need title',
  },
  image: {
    type: String,
    required: 'need image',
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('categories', catSchema);