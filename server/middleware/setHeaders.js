const setHeaders = (req, res, next) => {
  const origin = req.headers.origin;
  if (origin == "http://localhost:5173") {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = setHeaders;
