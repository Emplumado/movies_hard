const http = require('http');
const index=require('./src/index');

let tab;

switch (res.url) {

    // Home
    case '/':

        res.end(index.homePage);
        break;

    // En cartelera
    case '/en-cartelera':

        res.end(index.enCartelera);
        break;

    //Mas Votadas
    case '/mas-votadas':

        res.end(index.masVotadas);
        break;

    //Sucursales
    case '/sucursales':

        res.end(index.sucursales);
        break;

    //Contacto
    case '/contacto':

        res.end(index.contacto);
        break;

    //Preguntas Frecuentes
    case '/preguntas-frecuentes':

        res.end(index.preguntasFrecuentes);
        break;

    default:
        res.end('404 not found')
};


module.exoports=res.end;