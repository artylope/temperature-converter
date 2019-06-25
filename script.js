
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


  // console.log( currentInput );


  var checkIfNumber = function(currentInput) {
    if (!isNaN(currentInput)) {
      // console.log(currentInput + " is a number");
      return true;
    } else {
      // console.log(currentInput + " is not a number");
      return false;
    }
  };

  checkIfNumber(currentInput);
  // console.log(checkIfNumber(currentInput));


    if (checkIfNumber(currentInput) === true ){
        // console.log("test");
        // display( convertFToK(currentInput) + " \xB0K" + " / " + convertFToC(currentInput) + " \xB0C"  );
        var unit = document.getElementById('unit-selector');
        currentInput = parseFloat(currentInput);
        unit.addEventListener("change", function() {
          if(unit.value === "fahrenheit"){
            console.log("fahrenheit");
            display( convertFToK(currentInput) + " \xB0K" + "/" + convertFToC(currentInput) + " \xB0C"  );
          } else if(unit.value === "celsius"){
            console.log("celsius");
            display( convertCToK(currentInput) + " \xB0K" + "/" + convertCToF(currentInput) + " \xB0F"  );
          } else if(unit.value === "kelvin"){
            console.log("kelvin");
            display( convertKToF(currentInput) + " \xB0F" + "/" + convertKToC(currentInput) + " \xB0C"  );
          }
        });

        //if fahrenheit
        //else if celsius
        //else if kelvin
    } else {
        display( "Please enter a number");
    }

};
