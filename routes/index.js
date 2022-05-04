var express = require('express');
var router = express.Router();

const Client = require("../model/client");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', clients: Client.returnAll() });
});

module.exports = router;
