require('dotenv').config();
const express = require('express');
const app = express();
var hbs = require('hbs');

const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res)=> {
  //res.sendFile(__dirname +'/public/generic.html');
  res.render('home',{
    nombre: 'Pedro Perez',
    edad: '30',
    ciudad: 'Caracas'
  });
});

app.get('/elements', (req, res)=> {
  //res.sendFile(__dirname +'/public/generic.html');
  res.render('elements',{
    nombre: 'Pedro Perez',
    edad: '30',
    ciudad: 'Caracas'
  });
});

app.get('/generic', (req, res)=> {
  //res.sendFile(__dirname +'/public/generic.html');
  res.render('generic',{
    nombre: 'Pedro Perez',
    edad: '30',
    ciudad: 'Caracas'
  });
});

app.get('*', (req, res)=> {
  res.render('404');
});

app.listen(port)