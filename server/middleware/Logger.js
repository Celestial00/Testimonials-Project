const Logger = (req, res, next) => {
    const startTime = Date.now();
  console.log(`req is from ${req.url} from api ${req.method} `);

 res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};

module.exports = Logger;
