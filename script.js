var convertFToC = function(fahrenheit) {
    return ((fahrenheit - 32) * (5/9)).toFixed(2);
};

var convertFToK = function(fahrenheit) {
    return ((fahrenheit - 32) * (5/9) + 273.5).toFixed(2);
};

var convertCToF = function(celsius) {
    return ((celsius * (9/5)) + 32).toFixed(2);
};

var convertCToK = function(celsius) {
    return (celsius + 273.15).toFixed(2);
};

var convertKToF = function(kelvin) {
    return ((kelvin - 273.15) * (9/5) + 32).toFixed(2);
};

var convertKToC = function(kelvin) {
    return (kelvin - 273.15).toFixed(2);
};


var inputHappened = function(currentInput){


  console.log( currentInput );

  var checkIfNumber = function(currentInput) {
    if (!isNaN(currentInput)) {
      console.log(currentInput + " is a number");
      return true;
    } else {
      console.log(currentInput + " is not a number");
      return false;
    }
  };

  checkIfNumber(currentInput);
  console.log(checkIfNumber(currentInput));

  // var checkIfNumber = false;

    if (checkIfNumber(currentInput) === true ){
        console.log("test");
        display( convertFToK(currentInput) + " \xB0K" + " / " + convertFToC(currentInput) + " \xB0C"  );
    } else {
        display( "Please enter the temperature in Fahrenheit");
    }

};
