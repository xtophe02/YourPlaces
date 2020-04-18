const jwt = require("jsonwebtoken");

const getUserId = (req) => {
  
  const token = req.headers.authorization || '';
  

  if (token) {
    // console.log('token: ',token)
    return jwt.verify(token, process.env.JWT_SECRET);
   ;
  }
  return null;
};

module.exports = getUserId;
