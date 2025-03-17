const express = require ('express');
const app = express ();
const port = 3000;
const users = require ('./users')
const siswa = require ('./siswa')
const mapel = require ('./mapel')
const kelas = require ('./kelas')
const guru = require ('./guru')

//menggunakan modul
app.use('/users', users);
app.use('/siswa', siswa);
app.use('/mapel', mapel);
app.use('/kelas', kelas);
app.use('/guru', guru);

//routing

app.get("/", (req, res) => {
    res.send("kirim data");
})

app.post("/", (req, res) => {
    res.send("input data");
})

app.put("/", (req, res) => {
    res.send("edit data");
})

app.delete("/", (req, res) => {
    res.send("hapus data");
});