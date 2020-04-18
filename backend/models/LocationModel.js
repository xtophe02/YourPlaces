const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  }
});

module.exports = Location = mongoose.model("location", LocationSchema);
