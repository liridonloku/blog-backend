const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const commentController = require("../controllers/commentController");

router.get("/", commentController.commentsGET);

router.post("/", commentController.commentsPOST);

router.delete("/:commentid", verifyToken, commentController.commentDELETE);

module.exports = router;
