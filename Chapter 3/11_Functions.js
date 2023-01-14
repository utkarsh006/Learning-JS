function calcAverage(x,y){
    return 1+(x+y)/2;
}

let a=1; let b=2; let c=3;

console.log("One plus average of a & b : ", calcAverage(a,b));
console.log("One plus average of b & c : ", calcAverage(b,c));
console.log("One plus average of a & c : ", calcAverage(a,c));


/* Arrow functions were introduced in ES6.
   Arrow functions allow us to write shorter function syntax:
   let myFunction = (a, b) => 
   {
      a * b;  
   }  */
