var result=0;

function odd(num){
    return num%2 !== 0;
}

function func1(){

    var userInp = document.getElementById("inpt1").value;
    var array = userInp.split("")
    for(x=0 ; x<array.length ; x++){
        if(odd(array[x])&& array[x]!=" "){
            result+= parseInt(array[x])
            console.log(result)
        }
    }
   
    if(result==0){alert("there is no odd number")}
    else
    alert("sum of the odd numbers is : "+ result)
    result=0
    
    
}

