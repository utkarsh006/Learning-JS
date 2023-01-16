// Que 1 : Create an array of numbers and take input from user to add numbers to this array

let arr=[1,2,3,4,5]
let val = Number.parseInt(prompt("Enter a number"))
arr.push(val)
console.log(arr)

//---------------------------------------------------------------------------------------------------------------------------------------
// Que 2 : Keep adding nos. to the array in above problem until 0 is added to the array

let arr=[1,2,3,4,5]
let val;
do{
  val = Number.parseInt(prompt("Enter a number"))
  arr.push(val)
}while(val!=0)

console.log(arr)

//---------------------------------------------------------------------------------------------------------------------------------------
// Que 3 : Filter for nos. divisible by 10 from a given array

let arr = [10,25,20,66,40]

let x = arr.filter((value)=>{
   return value%10 == 0
})
console.log(x)

//---------------------------------------------------------------------------------------------------------------------------------------
// Que 4 : Create an array of square of given no.

let arr = [2,17,4,6]

let newArray = arr.map((value)=>{
    return value*value
})
console.log(newArray)

//---------------------------------------------------------------------------------------------------------------------------------------
// Que 5 : Use reduce to calculate the factorial of a given number from an array of first n natural nos.

let arr = [1,2,3,4,5]

let newArray = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(newArray)
