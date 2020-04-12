//aqui reuno todas las secciones para que router las tome
//router consume info de index
//app.js usa a router para llegar a index

const homePage=require('./homePage');
const enCartelera=require('./enCartelera');
const masVotadas=require('./masVotadas');
const sucursales=require('./sucursales');
const contacto=require('./contacto');
const preguntasFrecuentes=require('./preguntasFrecuentes');

module.exports={
    "homePage":homePage,
    "enCartelera":enCartelera,
    "masVotadas":masVotadas,
    "sucursales":sucursales,
    "contacto":contacto,
    "pregunstasFrecuentes":preguntasFrecuentes,
};