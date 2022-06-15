const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/", postController.postsGET);

router.post("/", verifyToken, postController.postsPOST);

router.get("/:postid", postController.singlePostGET);

router.put("/:postid", verifyToken, postController.singlePostPUT);

router.delete("/:postid", verifyToken, postController.singlePostDELETE);

module.exports = router;
