const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`ini halaman get users)`);
});

router.post("/inputusers", (req, res) => {
    res.send(`ini halaman input users)`);
});

router.put("/editusers", (req, res) => {
    res.send(`ini halaman edit user)`);
});

router.delete("/hapususers", (req, res) => {
    res.send(`ini halaman hapus user)`);
});

module.exports = router;