var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', link: [['home','/'], ['contatti', '/contatti']]});
});

router.get('/contatti', function(req, res, next) {
  res.render('contatti', {title: 'contatti', link: [['home','/'], ['contatti', '/contatti']]});
});

module.exports = router;
