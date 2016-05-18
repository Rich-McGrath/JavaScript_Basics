function getRandomNumber( upper, lower ) {
  if (isNaN(lower) || isNaN(upper) ){
    throw new Error('Both arugments must be numbers');
  }
  return Math.floor( Math.random() * (upper - lower + 1) ) + lower;
}

//var lower = prompt("Please in a number.");
//var upper = prompt("Please enter in a second number large than your previous number.");

console.log( getRandomNumber ( 'nine', 6) );
console.log( getRandomNumber ( 1, 1000) );
console.log( getRandomNumber ( 200, 500) );
console.log( getRandomNumber ( 1000, 20000) );
console.log( getRandomNumber ( 50, 'one-hundred') );

/*
console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(10000) );
console.log( getRandomNumber(2) );
*/

/*
function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}

console.log( getArea(10, 20, 'sq ft') );
*/
