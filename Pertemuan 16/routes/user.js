const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.get);
router.get("/:id", userController.get);
router.post("/", userController.post);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

module.exports = router;