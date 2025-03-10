const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`get peminjaman)`);
});

router.get("/:id", (req, res) => {
    res.send(`peminjaman id : ${req.params.id}`);
});

module.exports = router;