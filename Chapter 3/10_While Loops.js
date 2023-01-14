// WHILE LOOP

let n = prompt("Enter n : ")
n = Number.parseInt(n)
let i=0

while(i<n){
    console.log(i);
    i++;
}

/* OUTPUT : 
Enter n : 2
0
1   */


// DO-WHILE LOOP, block run then condition check, this loop will execute at least once.

let n = prompt("Enter n : ")
n = Number.parseInt(n)
let i=0

do{
    console.log(i);
    i++;
}while(i<n)
