const express = require('express');
const hbs = require('hbs');
const app = express();
require('./helpers/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // let salida = {
    //         nomb: "Javier",
    //         ape: "Briceño",
    //         fechN: "12/08/1994",
    //         url: req.url
    //     }
    //     // res.send('Hola Mundo')
    // res.send(salida)
    res.render('home', {
        nombre: 'Javier'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el Puerto ${ port }`);
});