const jwt = require('jsonwebtoken');
const ACCES_TOKEN_SECRET = 'neptaleboss';


exports.generateToken = (payload) => {
  return jwt.sign(payload, ACCES_TOKEN_SECRET);
}

exports.verifieToken = (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, ACCES_TOKEN_SECRET, (err, data) => {
    if (err) {
        return res.send(err);
    }
  });
}

exports.checkIfIsAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, ACCES_TOKEN_SECRET, (err, data) => {
    if (err) {
      return res.send(err);
    }

    if (!data.admin) {
      return res.status(401).json({ error: "no authorization for make this request" });
    }
    next();
  });
}