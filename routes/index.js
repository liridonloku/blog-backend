const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Nothing here" });
});

module.exports = router;
