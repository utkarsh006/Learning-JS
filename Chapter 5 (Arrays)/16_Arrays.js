// We can store different value in arrays in JS
let arr=[12,60,99,84,55,null]
console.log(arr)

// value access
console.log(arr[0])
console.log(arr[6]) //undefined since idx 6 don't exist
console.log(arr.length)

//changing value of an array, arrays are mutable
arr[0]=24
console.log(arr)

// In Js, arrays are objects
console.log(typeof(arr))

//traversing value using for loop
for(let i in arr){
    console.log(arr[i])
}
