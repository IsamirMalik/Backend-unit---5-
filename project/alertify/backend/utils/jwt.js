const jwt = require('jsonwebtoken');
const SECRET_KEY = "secret"

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || SECRET_KEY, {
    expiresIn: '30d',
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || SECRET_KEY);
};

module.exports = { generateToken, verifyToken };













