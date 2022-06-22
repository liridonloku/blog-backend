const Comment = require("../models/comment");
const { body, validationResult } = require("express-validator");

exports.commentsGET = (req, res, next) => {
  Comment.find({ post: req.params.postid }, "userName content date")
    .sort({ date: "desc" })
    .exec((err, comments) => {
      if (err) return next(err);
      res.json(comments);
    });
};

exports.commentsPOST = [
  // Validate
  body("userName", "Username cannot be empty").trim().isLength({ min: 1 }),
  body("content", "Comment cannot be empty").trim().isLength({ min: 1 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(401)
        .json({ message: "Error: One or more fields are empty." });
    }
    console.log(req.params);
    const comment = new Comment({
      post: req.params.postid,
      userName: req.body.userName,
      content: req.body.content,
      date: new Date(Date.now()),
    });
    comment.save((err, comment) => {
      if (err) return next(err);
      res.json(comment);
    });
  },
];

exports.commentDELETE = (req, res, next) => {
  Comment.findByIdAndDelete(req.params.commentid, (err, comment) => {
    if (err) return next(err);
    res.json(comment);
  });
};
