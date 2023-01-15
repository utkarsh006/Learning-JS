//length is not effected when delete property is applied

let nums = [1,2,3,4,5,6]
console.log(nums.length)  // output : 6
delete nums[0]
console.log(nums)  // output : [ <1 empty item>, 2, 3, 4, 5, 6 ]
console.log(nums.length)   // output : 6

console.log("\n")

//concat returns a new array. Doesn't change the existing arrays.-----------------------------------------------------------------------

let nums1=[11,12,13,14]
let newArray = nums.concat(nums1)
console.log(newArray)     // output : [ <1 empty item>, 2, 3, 4, 5, 6, 11, 12, 13, 14 ]


//-----------------------------SORT------------------------------------------------------------------------------

let arr=[-2,88,3,67,0]
console.log(arr.sort())  //modifies the original array. It sorts array alphabetically.

/* sort function takes an optional compare function. If the function is provided as the first argument then the sort function will consider these values (which are 
returned from the compare function) as the basis of sorting.    */

let compare = (a,b) =>
{
    return b-a
}
let arr=[-2,88,3,67,0]
console.log(arr.sort(compare))

// ------------------------------Splice and Slice--------------------------------------------------------------------------------------

let container = [1,2,3,4,5]
container.splice(2,3,1220,1450)//start from idx 2 and removes 3 elements and add 1220 and 1450.
console.log(container)


/* [1,2,3,4,5,6,7]
    0 1 2 3 4 5 6   */
    
let container = [1,2,3,4,5,6,7]
let newArray= container.slice(3)   // output : print from third idx [ 4, 5, 6, 7 ]
console.log(newArray)

let newArray1= container.slice(3,5)  //output : print from third idx excluding fifth one [ 4, 5 ]
console.log(newArray1)

