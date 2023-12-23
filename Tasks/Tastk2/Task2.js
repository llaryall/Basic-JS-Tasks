
function func1() {

  var userInp = document.getElementById("inpt1").value;
  var resultArray = [];
  var currentNumber = "";

  for (var i = 0; i < userInp.length; i++) {
    var currentChar = userInp.charAt(i);
    var parsedDigit = parseInt(currentChar);

    if (!isNaN(parsedDigit)) {

      currentNumber += currentChar;

    } else {

      if (currentNumber !== "") {
        resultArray.push(parseInt(currentNumber) * 2);
        currentNumber = "";
      }
      
      resultArray.push(currentChar);
    }
  }

  if (currentNumber !== "") {
    resultArray.push(parseInt(currentNumber) * 2);
  }

  var result = resultArray.join('');
  alert(result);
}
