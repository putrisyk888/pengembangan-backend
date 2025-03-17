const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`ini halaman get siswa)`);
});

router.post("/inputsiswa", (req, res) => {
    res.send(`ini halaman input siswa)`);
});

router.put("/editsiswa", (req, res) => {
    res.send(`ini halaman edit siswa)`);
});

router.delete("/hapussiswa", (req, res) => {
    res.send(`ini halaman hapus siswa)`);
});

module.exports = router;