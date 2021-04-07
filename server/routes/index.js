var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME', link: '/page2', array: ['elemento1', 'elemento2']});
});

router.get('/page2', function(req, res, next) {
  res.render('page2', {array: ['elemento1', 'elemento2']});
});
module.exports = router;
