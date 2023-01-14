// Que 1 : Create a variable of type string and add number to it.

let a = "Utkarsh"
let b = 9
console.log(a+b)

// OUTPUT : Utkarsh9 (String concatenation)
//---------------------------------------------------------------------------------------------------------------

// Que 2 : Use typeof operator to find the datatype of the string.

let a = "Utkarsh"
console.log(typeof(a))
//----------------------------------------------------------------------------------------------------------

// Que 3 : Create a const object. Cna you change it tol hold a number later on?
// We can't do this. Error is thrown.

const a =
{
    name : "Utkarsh",
    section : 1,
    isTeacher : false
}
a = 1

//------------------------------------------------------------------------------------------------------------------

// Que 4 : Can you add a new key to the const object in previous question?
// Yes we can make bcz constant x points to an object which is reserved in the memory, x is reference to the object and we can change the inner value of x. 

const x =
{
    name : "Utkarsh",
    section : 1,
    isTeacher : false
}

x['friend']="Yash"
console.log(x)

//-----------------------------------------------------------------------------------------------------------------------------------

// Que 5 : Write a JS program to create a dictionary meaning of 5 words.

const dict =
{
    cat : "billi",
    honey : "shehad",
    flower : "phool",
    buttefly : "titli",
    Go : "jao"
}

console.log(dict)
console.log(dict.Go)

