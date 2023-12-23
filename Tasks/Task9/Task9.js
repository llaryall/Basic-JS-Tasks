const userInput=prompt("how many members your team have ?")
if (!isNaN(userInput) && userInput !== null && userInput !== "") {
    number = Number(userInput);
  } else {
    alert("Please enter a valid number.");
  }
const members=[];
for(x=0 ; x< number ; x++){
    const name=prompt(`please enter the ${x+1} name : `)
    const age = prompt(`please enter the ${x+1} age`)
    const gender=prompt(`please enter the ${x+1} gender`)
    const person={ name , age , gender}
    members.push(person)
}

const nameSave={}
const names=[]
for(const person of members){
    if(!nameSave[person.name]){
        names.push([person.name])
        
    }
    else
    alert(`Name '${person.name}' is already saved.`);
    
}

alert("members are : "+names.join(' , '));