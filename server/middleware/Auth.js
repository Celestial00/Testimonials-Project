const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const AuthHeader = req.headers.authorization;

  if (!AuthHeader || !AuthHeader.startsWith("Bearer ")) {
    const err = new Error("No Token Found ");
    err.status = 401;
    return next(err);
  }

  const token = AuthHeader.split(" ")[1];

  try {
    jwt.verify(token, secretKey);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Auth;
