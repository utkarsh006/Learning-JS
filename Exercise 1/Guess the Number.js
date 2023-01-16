// GUESS THE NUMBER

let originalNumber = Math.floor(Math.random() * 10)+1;
console.log(originalNumber)
let chances = 0
let input = Number.parseInt(prompt('Guess a number of your choice : '))

while(input!=originalNumber)
{

    if(input<originalNumber)
    {
      console.log("Number Incorrect ! Less than the original number")
      chances++
      input = Number.parseInt(prompt('Guess a number of your choice : '))
    }

    else if(input>originalNumber)
    {
      console.log("Number Incorrect ! More than the original number")
      chances++
      input = Number.parseInt(prompt('Guess a number of your choice : '))
    }
    
}
    if(input==originalNumber)
    {
        console.log("Number correct")
        console.log("Your score : ", 100-chances)
    }



