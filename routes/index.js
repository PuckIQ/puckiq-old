var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { });
});

router.get('/wowy-range', function(req, res, next) {
  res.render('pages/wowy-range', { });
});

router.get('/wowy-season', function(req, res, next) {
  res.render('pages/wowy-season', { });
});

module.exports = router;
