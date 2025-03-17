const express = require ('express');
const router = express.Router();

//routing
router.get("/", (req, res) => {
    res.send(`ini halaman get kelas)`);
});

router.post("/inputkelas", (req, res) => {
    res.send(`ini halaman input kelas)`);
});

router.put("/editkelas", (req, res) => {
    res.send(`ini halaman edit kelas)`);
});

router.delete("/hapuskelas", (req, res) => {
    res.send(`ini halaman hapus kelas)`);
});

module.exports = router;