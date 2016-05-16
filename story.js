document.write("<h1>Crazy Story Creator</h1>");
var profession = prompt("Please enter in a profession?");
var name = prompt("Please enter a name?");
var food = prompt("Please enter in a food");
var place = prompt("Please enter in a place");

var story = "Once upont a time there was a " + profession + ". Who needed to find Queen " + name +
              ". The " + profession + " ate magic " + food + " and was transported to a magical " + place + "...";
document.write("<h2>" + story + "</h2>");
