/* let is block scopped. 
var can be updated and redeclared within its scope.
var is initialised as undefined whereas let and const variables are not initialized.
let can be updated but not redeclared.
const can neither be updated nor redeclared.   */


var name="Utkarsh"
{
    var name= 'this'
    console.log(name)
}
console.log(name)

// OUTPUT : this this


var name="Utkarsh"
{
    let name= 'this'
    console.log(name)
}
console.log(name)

//OUTPUT : this Utkarsh
