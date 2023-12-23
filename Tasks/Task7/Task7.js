function func1(){
var numb = document.getElementById("inpt1").value;
var array = numb.split(" ")
alert(array.sort(function(a , b){return a-b}))
}