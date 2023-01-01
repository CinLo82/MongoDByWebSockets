const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

//const router = require('./components/message/network');
const router = require('./network/routes');

db('mongodb+srv://cin:cin0002@cluster0.xrouvau.mongodb.net/?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);
router(app);



app.use('/app', express.static('public'));

// app.use('/', function(req, res) {
//     res.send('Hola');
// });

app.listen(3000);
console.log('la aplicacion esta escuchando en http//localhost:3000');