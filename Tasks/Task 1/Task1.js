var inp1 = document.getElementById("inpt1");
var inp2 = document.getElementById("inpt2");

function func1() {
    if (inp1.value == '' || inp2.value == '') {
        alert("please enter the numbers")
    }
    else {
        var res = parseInt(inp1.value) + parseInt(inp2.value)
        alert(res)
    }
}
