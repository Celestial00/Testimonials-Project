const Logger = (req, res, next) => {
  console.log(`req is from ${req.url} from api ${req.method} `);
  next();
};

module.exports = Logger;
