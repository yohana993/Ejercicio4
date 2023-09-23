const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Resto de tu código de rutas aquí...

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});