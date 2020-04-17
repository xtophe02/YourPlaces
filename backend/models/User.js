const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  places: [
    {
      place: {
        type: Schema.Types.ObjectId,
        ref: 'places'
      }
    }
  ],
});

module.exports = User = mongoose.model('user', UserSchema);