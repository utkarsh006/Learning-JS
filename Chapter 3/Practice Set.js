// Que 1 : Print the marks of student in an object using for loop

let marks={
    Ayush: 90,
    Raj : 86,
    Shubh : 54,
    Akansha : 23
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are : " +
    marks[Object.keys(marks)[i]])
}

console.log("\n")

//using for in loop
for(let key in marks){
    console.log("The marks of " + key + " are : "+marks[key])
}


//-------------------------------------------------------------------------------------------------------------------------

// Que 2 : Write a program which runs infinitely until user enters the correct number.

let correct_Number = 5
let i

while(i!=correct_Number){
    i= prompt("Enter a number : ")
}

console.log("Entered Correct Number !")


//-------------------------------------------------------------------------------------------------------------------------

// Que 3 : Write a program to find the mean of 5 nos. using functions.

const calcMean = (a,b,c,d,e) =>
{
    let mean = 0;
    mean = (a+b+c+d+e)/5
    return mean;
}

console.log(calcMean(10,20,5,15,25));
