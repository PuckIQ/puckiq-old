var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { });
});

router.get('/wowy-range', function(req, res, next) {
  res.render('pages/wowy-range', { });
});

module.exports = router;
