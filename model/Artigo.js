const Sequelize = require('sequelize');
const connection = require('./database');

const Artigo = connection.define('artigo',{
    tituloArtigo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    linkArtigo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    descricaoTitulo:{
         type: Sequelize.STRING,
         allowNull: false
    } 
});

Artigo.sync({force: false}).then(()=>{});

module.exports = Artigo;