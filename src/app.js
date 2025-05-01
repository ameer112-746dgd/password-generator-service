const express = require('express');
const path = require('path');
const passwordRoutes = require('./routes/password');

const app = express();

app.use('/generate-password', passwordRoutes);

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = app;
