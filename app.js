var startURL = 'https://www.formula1.com/en/results.html/2017/races/959/australia/';
var url = startURL;
var showOnClick = function (butt, text) {
  $(butt).click(function() {
    url = url + text;
    $.get(url, function(response) {
      if ($(response).find('table').html().length > 1000) {
        $('#result').html($(response).find('table').html());
      } else {
        $('#result').html('<p style="margin: 30px;">I Risultati Non Sono Ancora Disponibili.</p>');
      }
    });
    url = startURL;
    $('div.buttonContainer > div').removeClass('activeButton');
    $(this).addClass('activeButton');
  });
};
showOnClick('#fp1', 'practice-1.html');
showOnClick('#fp2', 'practice-2.html');
showOnClick('#fp3', 'practice-3.html');
showOnClick('#qlf', 'qualifying.html');
showOnClick('#race', 'race-result.html');
