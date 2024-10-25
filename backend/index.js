require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API con Express y MongoDB!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
