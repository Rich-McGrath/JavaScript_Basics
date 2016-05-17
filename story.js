var questions= 4;
var questionsLeft = '[ ' + questions + ' questions left] ';
document.write("<h1>Crazy Story Creator</h1>");
var profession = prompt("Please enter in a profession? " + questionsLeft )
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left] ';
var name = prompt("Please enter a name? " + questionsLeft);
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left] ';
var food = prompt("Please enter in a food " + questionsLeft);
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left] ';
var place = prompt("Please enter in a place " + questionsLeft);


var story = "Once upont a time there was a " + profession + ". Who needed to find Queen " + name +
              ". The " + profession + " ate magic " + food + " and was transported to a magical " + place + "...";
document.write("<h2>" + story + "</h2>");
