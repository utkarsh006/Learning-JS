let nums=[3,52,1,4]

for(let i=0; i<nums.length; i++){
    console.log(nums[i])
}

console.log("\n")

//-----------------------For Each loop--------------------------------------------------

nums.forEach((element)=>
{
    console.log(element *=element)
})

// ------------------------ Array.from : makes array from HTML Collections or any other object ----------------------------------------

let name = "Utkarsh"
let arr = Array.from(name)
console.log(arr)

// output : [ 'U', 't', 'k','a', 'r', 's','h']

// ------------------------------ for....of --------------------------------------------------------------

for(let i of nums){
    console.log(i)   //prints array elements 3,52,1,4
} 

for(let i in nums){
    console.log(i)    //prints array index or we can say object keys
} 
