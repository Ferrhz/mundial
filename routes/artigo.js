var express = require('express');
var router = express.Router();
var artigoController = require('../controller/artigoController')

router.get('/', artigoController.artigos)

module.exports = router;
