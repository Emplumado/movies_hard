const fs = require('fs');
const theatersJSON = fs.readFileSync('./data/theaters.json','utf-8');
const theaters = JSON.parse(theatersJSON);


function contenidoTabSucurales(){
    const titulo="Nuestras Salas:";
    let totalSalas=0;
    let listaSalas='\n';
    for(let elem of theaters.theaters){
        totalSalas=totalSalas+elem.total_rooms;
        listaSalas=listaSalas+"Nombre: "+elem.name+'\n'+'\n'+"Direccion: "+elem.address+'\n'+'\n'+"Descripcion: "+elem.description+'\n'+"______________________________________________________________________________________________________________________"+'\n'+'\n'+'\n';
    }
    let nroSalas="Tenemos "+totalSalas+" en total:";

    return titulo+'\n'+'\n'+nroSalas+'\n'+'\n'+listaSalas+'\n'
};
module.exports=contenidoTabSucurales();