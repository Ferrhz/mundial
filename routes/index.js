var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')

router.get('/home', indexController.index)

module.exports = router;
