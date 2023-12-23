function isUpperCase(word) {
    return word === word.toUpperCase();
}
var result=0;
function func1() {

    var userInp = document.getElementById("inpt1").value;
    var array = userInp.split("")
    for (x = 0; x < array.length; x++) {
        if (isUpperCase(array[x]) && array[x]!=(" ") && array[x]!=Number(array[x])) {
            result++;
        }
    }
    alert("number of the UpperCase letters is : " + result)
    result=0
}

