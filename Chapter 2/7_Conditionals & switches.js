//prompt aks us and alert tell us

let a = prompt("What's your age?")
a = Number.parseInt(a) //convert string to number

if(a>0){
    alert('This is a valid age')
}

else{
    alert('This is an invalid age')
}

//------------------------------------------------------------------

let a = prompt("What's your age?")
a = Number.parseInt(a) //convert string to number

if(a<0){
    alert('This is an invalid age')
}

else if(a<9){
    alert('You are a kid')
}

else if(a>=13 && a<=19){
    alert('You are a teenager')
}

else{
    alert('You are an adult')
}

// SWITCHES

let exp = prompt("Enter the day (0-6) : ");
exp = Number.parseInt(exp);

switch(exp)
{
    case 0 : console.log("Sunday"); break;
    case 1 : console.log("Monday"); break;
    case 2 : console.log("Tuesday"); break;
    case 3 : console.log("Wednesday"); break;
    case 4 : console.log("Friday"); break;
    case 5 : console.log("Saturday"); break;
    
    default : console.log("WRONG VALUE ENTERED !!");
}


