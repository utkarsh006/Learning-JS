//for loop : loop a block of code no. of times
// for in loop : loop through the keys of an object
// for of loop : loop through the values of an object

// Program to add first n natural nos.

let sum=0;
let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);

for(let i=0; i<n; i++){
    sum += i+1;
}

 console.log(sum);

//------------------------------------------------------------------------------------

// for in loop

let obj = {
    Ram : 99,
    Lakhan : 45,
    Bharat : 34,
    Raj : 77
}

for(let i in obj){
    console.log("Marks of " + i + " are : " + obj[i]);
}

//------------------------------------------------------------------------------------

// for of loop, used in arrays etc.

for(let i of "Utkarsh"){
    console.log(i)
}
