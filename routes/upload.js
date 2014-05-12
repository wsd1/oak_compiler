var express = require('express');
var router = express.Router();
var path = require('path'), fs = require('fs');


router.post('/', function(req, res) {
  res.send('upload complete.');
});

module.exports = router;
