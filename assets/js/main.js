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

function getTurnNumber() {
  // random for now
  return Math.floor(Math.random()*12+1);
}

function roll1d6() {
  return Math.floor(Math.random()*6+1);
}

function checkForEvent() {
  var turnNo = getTurnNumber();
  console.log("turnNo: " + turnNo);
  if(turnNo%2==0) {
  //if(turnNo==2 || turnNo==4 || turnNo==6 || turnNo==8 || turnNo==10 || turnNo==12) {
    var roll = roll1d6();
    console.log('event roll: ' + roll);
    switch (roll) {
      case 1: case 2: eventInspiration(); break;
      case 3:         eventGlitch(); break;
      case 4: case 5: eventPadExplosion(); break;
      case 6:         eventSpecial(turnNo); break;
      default:
    }
  } else {
    console.log("not event turn!");
  }
}

function eventInspiration() {
  alert('Inspiration!');
}

function eventGlitch() {
  alert('Glitch!');
}

function eventPadExplosion() {
  alert('Pad explosion/Space debris!');
}

function eventSpecial(turnNo) {
  if(turnNo==2 || turnNo==12) {           // blue event
    alert('Election year!')
  } else if (turnNo==4 || turnNo==6) {    // yellow event
    alert('Budget cuts!')
  } else if (turnNo==8 || turnNo==10) {   // red event
    alert('Solar flare! Strength: ' + roll1d6())
  }
}
