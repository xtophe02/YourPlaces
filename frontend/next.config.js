require('dotenv').config()
module.exports = {
  env: {
    TEST: process.env.TEST,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    API_URI_DOCKER: process.env.API_URI_DOCKER,
    API_URI: process.env.API_URI
  },
}