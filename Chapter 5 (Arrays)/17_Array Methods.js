let num = [1,2,3,43,87]
let b = num.toString()
console.log(typeof(b))  // output : string

// Join method
let c = num.join("-")
console.log(c)      // output : 1-2-3-43-87

// pop returns the popped element
let y = num.pop()
console.log(num)     // output : [ 1, 2, 3, 43 ]
console.log(y)       // output : 87

// pop returns the new array length
let x = num.push(100)
console.log(num)    // output : [ 1, 2, 3, 43, 100 ]
console.log(x)      // output : 5

// Shift , removes element from start of the array
let r = num.shift()
console.log(r,num)    // output :  1 and  [ 2, 3, 43, 100 ]

// UnShift , adds element from start of the array
let s = num.unshift(91)
console.log(s,num)  // output : 5 and [ 91, 2, 3, 43, 100 ]



