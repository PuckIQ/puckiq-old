$('#pq-playername').select2({
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

var stattype = [
  { id: 'G', text: 'Goals'},
  { id: 'S', text: 'Shots'},
  { id: 'C', text: 'Corsi'},
  { id: 'F', text: 'Fenwick'},
  { id: 'D', text: 'Dangerous'},
  { id: 'A', text: 'Score Adjusted'}
]

var season = [
  { id: 20162017, text: 20162017 },
  { id: 20152016, text: 20152016 },
  { id: 20142015, text: 20142015 },
  { id: 20132014, text: 20132014 },
  { id: 20122013, text: 20122013 }
]

$('#pq-display').select2({
  theme: "bootstrap",
  placeholder: {
    id: -1,
    text: 'Stat Type...'
  },
  delay: 250,
  data: stattype,
  allowClear: true
});

$('#pq-season').select2({
  theme: "bootstrap",
  placeholder: {
    id: -1,
    text: 'Season...'
  },
  delay: 250,
  data: season,
  allowClear: true
});

$('form').submit(function () {
  $.ajax({
    url: '/ajax/wm-season?' + $(this).serialize(),
    complete: function () {
      $('#pq-loader').css('display', 'none');
      $('#pq-wowydata').css('display', 'block');
    },
    beforeSend: function () {
      $('#pq-loader').css('display', 'block');
      $('#pq-wowydata').css('display', 'none');
    }
  }).done(function (data) {
    $('#pq-wowydata').html(data);
    /*$('#pq-1w2 > table').DataTable({
      orderClasses: false,
      'stripeClasses': ['stripe1', 'stripe2']
    });
    $('#pq-1wo2 > table').DataTable({
      orderClasses: false,
      'stripeClasses': ['stripe1', 'stripe2']
    });
    $('#pq-2wo1 > table').DataTable({
      orderClasses: false,
      'stripeClasses': ['stripe1', 'stripe2']
    });
    $('#pq-all > table').DataTable({
      orderClasses: false,
      'stripeClasses': ['stripe1', 'stripe2']
    });*/
  });
  return false;
});

$('button[type=reset]').on('click', function() {
  $('#pq-player1name, #pq-player2name, #pq-team, #pq-season').val(null).trigger('change');
  $('#pq-wowydata').css('display','none');
});