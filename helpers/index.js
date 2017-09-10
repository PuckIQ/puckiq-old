var request = require('request');
var config = require('../config');

function PuckIQAPI() {
  "use strict";

  var url = 'http://' + config.api.host + '/' + config.api.base;

  this.searchTeams = function(options, callback) {
    var urlBuilder = url + '/t/teams/getTeamSearch/team/' + options.team;
    request.get({url: urlBuilder, json: true}, (err, res, data) => {
      if(!err && res.statusCode == 200) {
        callback(data);
      } else {
        callback(err);
      }
    });
  }

  this.searchPlayers = function(options, callback) {
    var urlBuilder = url + '/p/players/getPlayerSearch/playername/' + options.player;
    request.get({url: urlBuilder, json: true}, (err, res, data) => {
      if(!err && res.statusCode == 200) {
        callback(data);
      } else {
        callback(err);
      }
    });
  }
}

module.exports = PuckIQAPI;