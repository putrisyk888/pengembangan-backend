const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`get user)`);
});

router.get("/:id", (req, res) => {
    res.send(`user id : ${req.params.id}`);
});

module.exports = router;