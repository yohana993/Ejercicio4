const express = require('express');
const app = express();
const fetch = require('node-fetch'); // Agregamos la importación de node-fetch

app.use(express.json());

// Endpoint para responder con un mensaje de "hola mundo"
app.get('/api', (req, res) => {
  res.status(200).json({ mensaje: 'hola mundo' });
});

// Endpoint para sumar dos números recibidos como query params
app.get('/api/suma', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const resultado = num1 + num2;
  res.status(200).json({ resultado });
});

// Endpoint para responder con el nombre recibido como params
app.get('/api/usuario/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.status(200).json({ usuario: nombre });
});

// Endpoint para responder con el personaje solicitado de SWAPI
app.get('/api/swapi/:id', (req, res) => {
  const id = req.params.id;
  const url = `https://swapi.dev/api/people/${id}/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.status(200).json({ personaje: data });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener el personaje de SWAPI' });
    });
});

// Endpoint para responder con el body recibido en una petición PUT
app.put('/api/body', (req, res) => {
  const body = req.body;
  res.status(200).json(body);
});

// Endpoint para sumar dos números recibidos en el body de una petición POST
app.post('/api/suma', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const resultado = num1 + num2;
  res.status(200).json({ resultado });
});

// Endpoint para eliminar un objeto con el ID especificado
app.delete('/api/:id', (req, res) => {
  const id = req.params.id;
  if (id === '3') {
    res.status(200).json({ mensaje: `Se ha eliminado el objeto con ID ${id}` });
  } else {
    res.status(404).json({ error: `No se encontró el objeto con el ID especificado` });
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});