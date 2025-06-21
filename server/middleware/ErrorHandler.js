const ErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.message || "internal Error";
  return res.status(status).json({ error: msg });
};

module.exports = ErrorHandler;
