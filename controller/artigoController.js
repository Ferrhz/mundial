const artigoModel = require('../model/artigoModel.json')

const fs = require('fs')

const artigoController = {
    artigos: (req, res) =>{
        res.render('artigo', {artigoM:artigoModel})
    },

    criarArtigo:(req,res)=>{
        let {tituloArtigo, linkArtigo, descricaoTitulo} =req.body
        artigoModel.push({tituloArtigo, linkArtigo, descricaoTitulo})
        

        res.redirect('/')
    },
    exibirArtigo: (req, res)=>{
        res.render('artigo')
    }
}
module.exports = artigoController