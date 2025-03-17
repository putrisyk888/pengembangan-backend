const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`ini halaman get guru)`);
});

router.post("/inputguru", (req, res) => {
    res.send(`ini halaman input guru)`);
});

router.put("/editguru", (req, res) => {
    res.send(`ini halaman edit guru)`);
});

router.delete("/hapusguru", (req, res) => {
    res.send(`ini halaman hapus guru)`);
});

module.exports = router;