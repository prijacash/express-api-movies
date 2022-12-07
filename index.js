const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname+'/views/index.html');
//   });

app.get('/', function(req, res) {
    res.render('index', {name: "Sterling Archer", age: 35});
  });

// Middleware
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

app.get('/foods', (req, res) => {
  res.render('foods', {foods: ['bread', 'banana']})
});

app.get('/movies', (req, res) => {
  res.render('movies', {movies: ['dunkirk', 'dumb and dumber']})
});

app.get('/products', (req, res) => {
  res.render('products', {products: ['shakeweight', 'blender']})
});



 
app.listen(8000);