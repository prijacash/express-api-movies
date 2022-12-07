const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
  res.render('movies', {movies: ['dunkirk', 'dumb and dumber']});
});

router.get('/products', (req, res) => {
  res.render('products', {products: ['sand crab', 'corny joke dog']})
});

module.exports = router;