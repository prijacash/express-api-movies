const express = require('express');
const router = express.Router();

router.get('/foods', (req, res) => {
  res.render('foods', {foods: ['coconut', 'avocado']});
});

router.get('/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;