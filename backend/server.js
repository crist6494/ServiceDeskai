const express = require('express');
const mongoose = require('mongoose');

const app  = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* app.use(express.json()); // Middleware para parsear JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Usar las rutas de usuario
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})