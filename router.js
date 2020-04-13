const index=require('./src/index');

module.exports={
    "route": function(request,response){
        switch (request.url) {

            // Home
            case '/':
                response.end(index.homePage);
                break;

            // En cartelera
            case '/en-cartelera':
                response.end(index.enCartelera);
                break;

            //Mas Votadas
            case '/mas-votadas':
                response.end(index.masVotadas);
                break;

            //Sucursales
            case '/sucursales':
                response.end(index.sucursales);
                break;

            //Contacto
            case '/contacto':
                response.end(index.contacto);
                break;

            //Preguntas Frecuentes
            case '/preguntas-frecuentes':
                response.end(index.preguntasFrecuentes);
                break;

            default:
                response.end('404 not found')
        };
    }
};



