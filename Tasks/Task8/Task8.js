

function func1(){
    var userInp = document.getElementById("inpt1").value
    var lettercount={};
    for(let letter of userInp)
     if(lettercount[letter]){
     lettercount[letter]++
     
     }
     else{
        lettercount[letter]=1
     }
 
 var string = JSON.stringify(lettercount)
 alert(string)
     
}
