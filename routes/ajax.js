var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

var baseUrl = 'http://' + config.api.host + '/' + config.api.base;

/* GET home page. */
router.get('/wowy-range', function (req, res, next) {
  var query = req.query;
  var serialize = serializeQuery(req.query);
  console.log(baseUrl + '/m2/schedule/getRangeWowy?' + serialize);
  request.get({ url: baseUrl + '/m2/schedule/getRangeWowy?' + serialize, json: true }, (err, response, data) => {
    var datacheck = (!err && response.statusCode != 200) ? false : true;
    var wowy = (!err && response.statusCode != 200) ? [] : data;
    request.get({ url: baseUrl + '/m2/players/getPlayer?playerid=' + query.q2player1id, json: true}, (e, r, d) => {
      res.render('ajax/ax-wowy-range', { check: datacheck, data: wowy, queryData: query, player1info: d[0] });
    });
  })
});

function serializeQuery(query) {
  var serialized = "";
  Object.keys(query).forEach(function (key) {
    if (query[key] !== '' && typeof key !== 'undefined')
      serialized += key.toString() + '=' + query[key].toString() + '&';
  });
  return serialized.substr(0, serialized.length - 1);
}

module.exports = router;