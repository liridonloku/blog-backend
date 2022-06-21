const { body, validationResult } = require("express-validator");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.loginPOST = [
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    const user = { id: req.user._id, email: req.user.email };
    jwt.sign({ user }, "secretkey", { expiresIn: "30d" }, (err, token) => {
      res.json({
        token,
      });
    });
  },
];

exports.verifyUser = (req, res, next) => {
  // verifyToken middleware sets req.token.user if token is valid
  User.findById(req.token.user.id)
    .select("firstName lastName email -_id")
    .exec((err, user) => {
      if (err) return next(err);
      return res.json(user);
    });
};
