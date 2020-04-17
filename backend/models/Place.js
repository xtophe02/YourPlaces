const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  coordinates: {
    type: Schema.Types.ObjectId,
    ref: 'locations'
  }
});

module.exports = Place = mongoose.model("place", PlaceSchema);
