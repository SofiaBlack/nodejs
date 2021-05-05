var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME', link: [['/','HOME'], ['/contatti', 'CONTATTI']]});
});

router.get('/contatti', function(req, res, next) {
  res.render('contatti', {title: 'CONTATTI', link: [['/','HOME'], ['/contatti', 'CONTATTI']]});
});
module.exports = router;
