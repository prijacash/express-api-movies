const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname+'/views/index.html');
//   });

app.get('/', function(req, res) {
    res.render('index', {name: "Sterling Archer", age: 35});
  });



 
app.listen(8000);