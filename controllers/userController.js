const { body, validationResult } = require("express-validator");
const passport = require("passport");
const jwt = require("jsonwebtoken");

exports.loginPOST = [
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    const user = { id: req.user._id, email: req.user.email };
    jwt.sign({ user }, "secretkey", { expiresIn: "10h" }, (err, token) => {
      res.json({
        token,
      });
    });
  },
];
