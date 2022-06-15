const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader === "undefined") {
    return res
      .status(403)
      .json({ message: "You need to log in to access this resource" });
  }
  // bearerHeader format is: "bearer <token>"
  // Split bearerHeader at the space char.
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  jwt.verify(bearerToken, "secretkey", (err, token) => {
    if (err) return next(err);
    req.token = token;
    next();
  });
};
