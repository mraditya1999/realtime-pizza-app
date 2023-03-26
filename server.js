const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressEjsLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('home');
});

// set Template engine
app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
