const express = require("express");
const router = express.Router();
const commentsRouter = require("./comments");
const postController = require("../controllers/postController");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/", postController.postsGET);

router.post("/", verifyToken, postController.postsPOST);

router.get("/:postid", postController.singlePostGET);

router.use("/:postid/comments", commentsRouter);

router.put("/:postid", verifyToken, postController.singlePostPUT);

router.delete("/:postid", verifyToken, postController.singlePostDELETE);

module.exports = router;
