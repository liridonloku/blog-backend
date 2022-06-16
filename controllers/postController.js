const Post = require("../models/post");
const { body, validationResult } = require("express-validator");

exports.postsGET = (req, res, next) => {
  Post.find({})
    .populate("author", "firstName lastName email -_id")
    .sort({ date: "desc" })
    .exec((err, data) => {
      if (err) return next(err);
      res.json(data);
    });
};

exports.postsPOST = [
  // Validate
  body("title", "Title cannot be empty").trim().isLength({ min: 1 }),
  body("article", "Article cannot be empty").trim().isLength({ min: 1 }),
  body("published").exists(),

  // Handle request
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.json(errors.array());
    const post = new Post({
      title: req.body.title,
      poster: req.body.poster || "",
      article: req.body.article,
      author: req.token.user.id,
      date: new Date(Date.now()),
      published: req.body.published,
    });
    post.save((err, savedPost) => {
      if (err) return next(err);
      res.json(savedPost);
    });
  },
];

exports.singlePostGET = (req, res, next) => {
  Post.findById(req.params.postid)
    .populate("author", "firstName lastName email -_id")
    .exec((err, post) => {
      if (err) return next(err);
      res.json(post);
    });
};

exports.singlePostPUT = async (req, res, next) => {
  const post = await Post.findById(req.params.postid);
  post.title = req.body.title;
  post.article = req.body.article;
  post.author = req.token.user.id;
  post.published = req.body.published;
  if (req.body.poster) post.poster = req.body.poster;
  post.save((err, savedPost) => {
    if (err) return next(err);
    res.json(savedPost);
  });
};

exports.singlePostDELETE = (req, res, next) => {
  Post.findByIdAndDelete(req.params.postid).exec((err, post) => {
    if (err) return next(err);
    res.json(post);
  });
};
