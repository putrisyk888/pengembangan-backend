const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`ini halaman get mapel)`);
});

router.post("/inputmapel", (req, res) => {
    res.send(`ini halaman input mapel)`);
});

router.put("/editmapel", (req, res) => {
    res.send(`ini halaman edit mapel)`);
});

router.delete("/hapusmapel", (req, res) => {
    res.send(`ini halaman hapus mapel)`);
});

module.exports = router;