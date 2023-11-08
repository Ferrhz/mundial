var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')
var artigoController = require('../controller/artigoController')

router.get('/', indexController.index)
router.get('/artigos', artigoController.artigos)
router.post('/artigos', artigoController.criarArtigo)

module.exports = router;
