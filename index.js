const express = require('express');
const app = express();
const porta = "3000";
const bodyParser = require('body-parser');
const connection = require('./model/database');
const mysql = require("mysql2/promise");
const Artigo = require('./model/Artigo')
//database
connection
.authenticate()
.then(()=>{
    console.log("conexao efetuada com BD");
})
.catch((msgError)=>{
    console.log(`aconteceu o erro: ${msgError}`)
})

const servidor = (error) =>{
    if(error){
        console.log(`Ocorreu um erro: : ${error}`)
    }else{
        console.log("Rodando servidor...")
    }
}
app.set('view engine', 'ejs');
app.use(express.static('public'));
// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get('/', (req, res) =>{
    res.render('index')
})

app.get("/artigos", (req, res) =>{
    Artigo.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then(artigo => {
        res.render('artigo', {
            artigos:artigo
        })
    })

});

app.post('/salvarpergunta', (req, res) =>{
    var titulo = req.body.tituloArtigo;
    var link = req.body.linkArtigo;
    var descricao = req.body.descricaoTitulo;

    Artigo.create({
        tituloArtigo: titulo,
        linkArtigo: link,
        descricaoTitulo: descricao

    }),res.redirect("/") 
});


app.get('/basedeconhecimento', (req, res) =>{
    res.render("base")
})






app.listen(porta, servidor)