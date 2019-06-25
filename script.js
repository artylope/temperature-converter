var convertFToC = function(fahrenheit) {
    return Math.floor((fahrenheit - 32) * (5/9));
};

var convertFToK = function(fahrenheit) {
    return Math.floor((fahrenheit - 32) * (5/9) + 273.5);
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
