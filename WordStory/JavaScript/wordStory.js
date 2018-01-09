function tellStory(){
    //get values from input elements
    var boyName = document.getElementById("boyName").value;
    var girlName = document.getElementById("girlName").value;
    var geoForm = document.getElementById("geoForm").value;
    var verb = document.getElementById("verbTxt").value;
    var cont = document.getElementById("contTxt").value;
    var liq = document.getElementById("liquidTxt").value;
    var bodyPart = document.getElementById("bodyPartTxt").value;
    var ingVerb = document.getElementById("ingVerbTxt").value;

    //write the story based on the variables
    var output = document.getElementById("output");
    output.innerHTML = boyName + " and " + girlName + " went up the " + geoForm +
                       " to " + verb + " a " + cont + " of " + liq + " <br/><br/>" +
                       boyName + " fell down and broke his " + bodyPart + " and " + girlName +
                       " came " + ingVerb + " after.";
}