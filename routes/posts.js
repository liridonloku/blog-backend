const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/", postController.postsGET);

router.post("/", verifyToken, postController.postsPOST);

router.get("/:postid", postController.singlePostGET);

router.get("/:postid/comments", commentController.commentsGET);

router.post("/:postid/comments", commentController.commentsPOST);

router.delete(
  "/:postid/comments/:commentid",
  verifyToken,
  commentController.commentDELETE
);

router.put("/:postid", verifyToken, postController.singlePostPUT);

router.delete("/:postid", verifyToken, postController.singlePostDELETE);

module.exports = router;
