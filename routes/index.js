var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { });
});

router.get('/player-wowy-range', function(req, res, next) {
  res.render('pages/player-wowy-range', { });
});

router.get('/player-wowy-season', function(req, res, next) {
  res.render('pages/player-wowy-season', { });
});

router.get('/player-wm-season', function(req, res, next) {
  res.render('pages/player-wm-season', { });
});

router.get('/team-wowy-season', function(req, res, next) {
  res.render('pages/team-wowy-season', { });
});

router.get('/team-wowy-range', function(req, res, next) {
  res.render('pages/team-wowy-range', { });
});

module.exports = router;
