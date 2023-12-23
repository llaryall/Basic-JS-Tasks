var result=0;
function even(num){
    return num%2==0
}
function func1(){
    var userInp = document.getElementById("inpt1").value;
    var array = userInp.split('');
    for(x=0; x<array.length ; x++){
        if(even(array[x]) && array[x] !=" "){
            result++
        }
    }
  alert("number of even numbers : "+ result)
  result=0
}