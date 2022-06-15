const express = require("express");
const router = express.Router();
const postsRouter = require("./posts");

router.use("/posts", postsRouter);

router.get("/", function (req, res, next) {
  res.json({ message: "Api index" });
});

module.exports = router;
