const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: 'need title',
  },
  title_description: {
    type: String,
    required: 'need title description',
  },
  image: {
    type: String,
  },
  contenu: {
    type: String,
    required: 'need contenu',
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

module.exports = mongoose.model('posts', postSchema);