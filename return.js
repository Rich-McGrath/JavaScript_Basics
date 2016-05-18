function isEmailEmpty() {
  var field = document.getElementBuId('email');
  if (field.value === '' ){
    return true;
  }else {
    return fales;
  }
}

var fieldTest = isEmailEmpty();
if (fieldTest === true){
  alert('Please provide your email address.');
}
