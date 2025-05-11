const express = require ('express');
 const app = express ();
 const port = 3000;
 const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

 app.use(express.json()); //Middleware body parser
 app.use('/api/mahasiswa', mahasiswaRoutes); //Prefix router
 
 app.listen(3000, () => {
     console.log('Server berjalan di hhtp://localhost:3000');
 });