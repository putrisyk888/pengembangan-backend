const express = require('express');
const sequelize = require('./config/db');
const supplierRouter = require('./controller/supplier');
const { route } = require('./routes/supplier');
const router = require ('./routes/supplier');

const app = express();
app.use(express.json());

app.use('/api/supplier', supplierRouter);

//Sync database and start server
sequelize.sync()
.then(() => {
    console.log('Database connected and synchronized.');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error('Unable to connected to database:', err);
});