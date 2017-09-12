$('#pq-player1name, #pq-player2name').select2({
  theme: "bootstrap",
  placeholder: {
    id: -1,
    text: 'Player Name...',
  },
  ajax: {
    url: 'http://api.puckiq.org/puckiq/0/players/getPlayerSearch',
    dataType: 'json',
    delay: 250,
    data: function (params) {
      return {
        fullName: params.term
      }
    },
    processResults: function (data, params) {
      return {
        results: $.map(data, function (item) {
          return {
            text: item.fullName,
            id: item.playerid
          }
        })
      }
    },
    cache: false
  },
  escapeMarkup: function (markup) { return markup; },
  minimumInputLength: 1
});

$('#pq-team').select2({
  theme: "bootstrap",
  placeholder: {
    id: -1,
    text: 'Team Name...',
  },
  ajax: {
    url: 'http://api.puckiq.org/puckiq/m30/teams/getTeamSearch',
    dataType: 'json',
    delay: 250,
    data: function (params) {
      return {
        abbr: params.term
      }
    },
    processResults: function (data, params) {
      return {
        results: $.map(data, function (item) {
          return {
            text: item.team,
            id: item.team
          }
        })
      }
    },
    cache: false
  },
  escapeMarkup: function (markup) { return markup; },
  minimumInputLength: 1
});

// This needs to be setup differently
$('#pq-season').select2({
  theme: "bootstrap",
  placeholder: {
    id: -1,
    text: 'Choose Seasons...',
  },
  ajax: {
    url: 'http://api.puckiq.org/puckiq/m30/seasonwowy/getSeasonList',
    dataType: 'json',
    delay: 250,
    data: function (params) {
      return {
        abbr: params.term
      }
    },
    processResults: function (data, params) {
      return {
        results: $.map(data, function (item) {
          return {
            text: item._id,
            id: item._id
          }
        })
      }
    },
    cache: false
  },
  escapeMarkup: function (markup) { return markup; },
  minimumInputLength: 1
});

$('button[type=reset]').on('click', function() {
  $('#pq-player1name, #pq-player2name, #pq-team, #pq-season').val(null).trigger('change');
  $('#pq-wowydata').css('display','none');
});