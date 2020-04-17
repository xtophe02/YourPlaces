const jwt = require('jsonwebtoken')

const generateToken = ({email, id}) => {
    
    return jwt.sign({ email, id }, process.env.JWT_SECRET, { expiresIn: '2 hours' })
}

module.exports = generateToken