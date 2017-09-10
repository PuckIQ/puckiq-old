var nhlplayers = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: 'http://api.puckiq.org/puckiq/0/players/getPlayerSearch?fullName=%QUERY',
    wildcard: '%QUERY'
  }
});

$('input[name=playersearch]').typeahead(null, {
  name: 'player-search',
  display: 'fullName',
  source: nhlplayers
});