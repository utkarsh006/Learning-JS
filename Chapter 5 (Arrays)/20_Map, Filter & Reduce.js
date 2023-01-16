// These are the higher order array methods

// for each is used when we want to perform operation on the existing element of an array.
// map creates a new array by performing some operations on each array element.

let arr = [45,23, 34]

let a = arr.map((value, index, array)=>
{
    console.log(value,index, array)
    return value +index
})

console.log(a)

/* OUTPUT 
45 0 [ 45, 23, 34 ]
23 1 [ 45, 23, 34 ]
34 2 [ 45, 23, 34 ]
[ 46, 24, 35 ]     */


// ------------------------ FILTER METHOD : It filters an array with values that passes a test ---------------------------------------------------------
// Original array remains the same.

let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((value)=>{
    return value <10
})

console.log(a2);


//--------------------------------------- REDUCE METHOD : reduces an array to a single value -------------------------------------------------------------

let arr3 = [1,2,3,5,2,1]
let a3 = arr3.reduce((value1,value2)=>{
    return value1+value2
})

console.log(a3)

/* Output : 14
  1+2 = 3
  3+3 = 6
  6+5 = 11
  11+2 = 13
  13+1 = 14   */
