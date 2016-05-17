var userNumber = prompt('Please enter in a number? ');

alert('Here is your random number: ' + Math.random() * (parseInt(userNumber) - 1) + 1);
