function contenidoTabEnCartelera(){
    const titulo="En Cartelera​";
    const totalPeliculas="Tenemos "+movies.length+" peliculas:";
    const arregloContenido=movies.map(function(elem){
        return "Titulo: "+elem.title+ '\n'+'\n' +"Reseña​: "+elem.overview+'\n'+"____________________________________________________________________________________"+'\n';
    });
    let listaContenido='\n';
    arregloContenido.forEach(elem=>{
        return listaContenido=listaContenido+elem+'\n';
    })
    return titulo+'\n'+'\n'+totalPeliculas+'\n'+listaContenido+'\n';
};

module.exports=contenidoTabEnCartelera();