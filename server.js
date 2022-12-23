const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

router.get('/message', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    res.send('Lista de mensajes');
});

router.delete('/message', function(req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('mensaje '+ req.body.text + ' añadido correctamente');
});

// app.use('/', function(req, res) {
//     res.send('Hola');
// });

app.listen(3000);
console.log('la aplicacion esta escuchando en http//localhost:3000');