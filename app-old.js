const http = require('http');

const server = http.createServer((req, res)=>{
 /*res.writeHead(200,{'Content-Type':  'application/json'});
const persona = {
    id: 1,
    nombre: 'Pedro Perez',
    edad: 35,
    ciudad: 'Caracas'
}*/
res.write('Hola Mundo');
 res.end();
})
.listen(8080);


console.log(`Escuchando por el puerto`, 8080);