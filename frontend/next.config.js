require('dotenv').config()
module.exports = {
  env: {
    TEST: process.env.TEST,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
  },
}