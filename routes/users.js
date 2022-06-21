const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/login", userController.loginPOST);

router.post("/verify", verifyToken, userController.verifyUser);

module.exports = router;
