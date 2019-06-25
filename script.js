var convertFToC = function(fahrenheit) {
    return Math.floor((fahrenheit - 32) * (5/9));
};

var convertFToK = function(fahrenheit) {
    return Math.floor((fahrenheit - 32) * (5/9) + 273.5);
};


var inputHappened = function(currentInput){
  console.log( currentInput );
  display( convertFToK(currentInput) + " \xB0K" + " / " + convertFToC(currentInput) + " \xB0C"  );
};