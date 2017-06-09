function initialize() {

    $("#token").draggable({ containment: "#sunBox", scroll: false,
        stop: function(event, ui) {
          var top = $('#token').css('top');
          var left = $('#token').css('left');
          console.log('dragged to top=' + top + ' and left='+ left + '');
        }
    });

};

$("#sunButton").click(function() {
    update($("#TurnNumber"));
} );

function update(j) {
    var n = parseInt(j.text(), 10);
    j.text(n+1);
}

/* notatki
- zmiana pozycji tokena: https://stackoverflow.com/questions/12744928/in-jquery-how-can-i-set-top-left-properties-of-an-element-with-position-values
  $('#token').css({top: 200, left: 200, position:'absolute'});
*/
