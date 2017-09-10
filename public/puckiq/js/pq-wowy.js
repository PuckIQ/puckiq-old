var nhlteams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: 'http://api.puckiq.org/puckiq/0/teams/getTeamSearch?abbr=%QUERY',
    wildcard: '%QUERY'
  }
});

$('#pq-team').typeahead(null, {
  name: 'pq-team-search',
  display: 'team',
  source: nhlteams
});

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

$('#pq-datestart').datetimepicker({
  icons: {
    time: "fa fa-clock-o",
    date: "fa fa-calendar",
    up: "fa fa-arrow-up",
    down: "fa fa-arrow-down"
  },
  format: 'YYYY-MM-DD'
});

$('#pq-dateend').datetimepicker({
  icons: {
    time: "fa fa-clock-o",
    date: "fa fa-calendar",
    up: "fa fa-arrow-up",
    down: "fa fa-arrow-down"
  },
  format: 'YYYY-MM-DD',
  useCurrent: false
});

$("#pq-datestart").on("dp.change", function (e) {
  $('#pq-dateend').data("DateTimePicker").minDate(e.date);
});

$("#pq-dateend").on("dp.change", function (e) {
  $('#pq-datestart').data("DateTimePicker").maxDate(e.date);
});

$('form').submit(function () {
  $.ajax({
    url: '/ajax/wowy-range?' + $(this).serialize()
  }).done(function (data) {
    $('#pq-wowydata').html(data);
    $('table').DataTable();
  })
  return false;
});