var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'HOME', link: [['/','HOME'], ['/contatti', 'CONTATTI']]});
});

router.get('/contatti', function(req, res, next) {
  res.render('contatti', {title: 'CONTATTI', link: [['/','HOME'], ['/contatti', 'CONTATTI']]});
=======
  res.render('index', { title: 'HOME', link: '/page2', array: ['elemento1', 'elemento2']});
});

router.get('/page2', function(req, res, next) {
  res.render('page2', {array: ['elemento1', 'elemento2']});
>>>>>>> 995380c05c287eda11184b6f65306c368a337acb
});
module.exports = router;
