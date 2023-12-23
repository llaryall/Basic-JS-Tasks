
function func1() {
    var newarray = [];
    var userInp = document.getElementById("inpt1").value;
    var array = userInp.split('');
    for (x = array.length - 1; x >= 0; x--) {

        newarray.push(array[x])
    }
     alert("new word is : "+newarray.join(""))
    }


