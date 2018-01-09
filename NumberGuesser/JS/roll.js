function rollDice(){
    var rawSpn = document.getElementById("rawTxt");
    var timesSpn = document.getElementById("timesTxt");
    var finalSpn = document.getElementById("finalTxt");

    var raw = Math.random();
    rawSpn.innerHTML = raw;

    var times100 = (raw * 100);
    timesSpn.innerHTML = times100;

    var final = Math.ceil(times100);
    finalSpn.innerHTML = final;
}