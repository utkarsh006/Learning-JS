alert("Your script works")

//prompt can also be given a default value as a second parameter
let a = prompt("Enter a here : ","200")
//document.write(a)

console.log("\n")

let write = confirm("Do you want to write it to the page?")

if(write){
    document.write(a)
}

else{
    document.write("Allow me to write")
}
