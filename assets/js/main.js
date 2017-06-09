function initialize() {

    $("#token").draggable({ containment: "#sunBox", scroll: false });

};

$("#sunButton").click(function() {
    update($("#TurnNumber"));
} );

function update(j) {
    var n = parseInt(j.text(), 10);
    j.text(n+1);
}
