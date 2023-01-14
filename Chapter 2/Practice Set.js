// Que 1 : Find if the age of a person lies b/w 10 and 20. 10 and 20 are excluded. 

let age = prompt("Your age?")

if(age>10 && age<20){
    alert('Yes it lies')
}

else{
    alert('Not lies b/w the range')
}

//-------------------------------------------------------------------------------------------------------------

// Que 2 : Use Switch case in JS. 
// Ans : Done previously.

//------------------------------------------------------------------------------------------------------------------

//Que 3 : Find whether a no. is divisible by 2 and 3

let num = prompt("Your number?")
num = Number.parseInt(num) 

if(num%2 ==0 && num%3==0){
    alert('Divisible by 2 and 3')
}

else{
    alert('Not Divisible by 2 and 3')
}

//------------------------------------------------------------------------------------------------------------------


// Que 4 : Find whether a no. is divisible by either 2 or 3

let num = prompt("Your number?")
num = Number.parseInt(num) 

if(num%2==0){
    alert('Divisible by 2')
}

else if(num%3==0){
    alert('Divisible by 3')
}

else{
    alert('Not Divisible by 2 and 3')
}

//------------------------------------------------------------------------------------------------------------------
// Que 5 : Illustrate the use ternary operator

let age = prompt("Your age?")
age = Number.parseInt(age) 
age>=18 ? alert('You can drive') : alert('You cant drive')
