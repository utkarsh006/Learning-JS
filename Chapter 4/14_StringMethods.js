let name = "Utkarsh"
console.log(name.length)  //property
console.log(name.toUpperCase())  //function
console.log(name.toLowerCase())


// U t k a r s h
// 0 1 2 3 4 5 6
console.log(name.slice(2,4)) //4 not included, output : ka
console.log(name.slice(2))  // output : karsh

let name1 = "Utkarsh Saxena"
console.log(name1.replace("Saxena","Bhai")) // output : Utkarsh Bhai

let name2 = "Ms"
let name3 = "Dhoni"
console.log(name2.concat(name3))  // or we can use + sign for string concatenation
console.log(name2+name3)

let name4 = "        Taj Mahal   "
console.log(name4.trim())


//------------------------Includes---------------------------------

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//----------------------starts with----------------------------------------
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false


//--------------------------ends with----------------------------------------
let text = "Hello world";
let result = text.endsWith("world");
