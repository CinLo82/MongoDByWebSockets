const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

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
    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req, res) {
    console.log(req.query);
    if(req.query.error == 'ok') {
        response.error(req, res, 'error simulado', 400);
    } else{
       response.success(req, res, 'creado correctamente', 201); 
    }
});

// app.use('/', function(req, res) {
//     res.send('Hola');
// });

app.listen(3000);
console.log('la aplicacion esta escuchando en http//localhost:3000');