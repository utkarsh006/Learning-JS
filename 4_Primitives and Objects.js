/* NN SS BB U (Primitive datatypes)
Null
Number
Symbol
String
Boolean
Big Int 
Undefined  

Objects(Non Primitive datatype) are the key value pairs. */


let a = null;
let b = 345;
let c = true;
let d = BigInt("640") + BigInt("60")
let e = "Utkarsh"
let f = Symbol("Hey ! I am a symbol")
let g = undefined

console.log(a,b,c,d,e,f,g);
console.log(typeof(d))


/* OUTPUT 

null 345 true 700 Utkarsh Symbol(Hey ! I am a symbol) undefined
bigint       */

// ----------------------- OBJECTS ------------------------------------------

const item = 
{
    "Utkarsh" : true,
    "Yash" : false,
    "Raj" : 72,
    "Krishna" : undefined
}

console.log(item["Utkarsh"])
console.log(item["xyz"])

/* OUTPUT

true
undefined     */
