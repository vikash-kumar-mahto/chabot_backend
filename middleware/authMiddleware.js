const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).send("Access denied. No token provided.");
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access denied. Invalid token format.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
