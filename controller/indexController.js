const indexController = {
    index: (req, res) =>{
        res.render('index')
    },
    artigos: (req, res) =>{
        res.render('artigo')
    }
}
module.exports = indexController