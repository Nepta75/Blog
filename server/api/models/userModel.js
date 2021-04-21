const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: {
    type: String,
    required: 'need title',
  },
  mdp: {
    type: String,
    required: 'need title description',
  },
  admin: {
    type: Boolean,
  },
  email: {
    type: String,
    required: 'need contenu',
  }
});

module.exports = mongoose.model('users', userSchema);