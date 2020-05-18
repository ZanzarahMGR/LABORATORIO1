  function LA_CADENA_MAS_LARGA(inputArray) 
  {
    var longest = inputArray.reduce(function (a, b) { 
        return a.length > b.length ? a : b; 
    });
    var longArray = []; 
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longest.length) {
            longArray.push(inputArray[i]);
        }
    }
    return longArray;
  }
  function hola(x)
  {
    return "BIENVENIDO SEÑOR@ "+x
  }
  


  

  