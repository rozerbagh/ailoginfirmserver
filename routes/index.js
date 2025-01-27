var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status: "ok", message: "Welcome to the server API"});
});

module.exports = router;
