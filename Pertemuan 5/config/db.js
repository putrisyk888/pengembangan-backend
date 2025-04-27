const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'akademik'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Koneksi ke database MySql berhasil');
});

module.exports = db;