function askName(){
   var askName = prompt("Enter your name:")
return askName()

}
alert("\n\n Welcome to 20! This is a competition to see which player gets closer to the number 20. \n\n You are going to be playing against the computer. \n\n You will draw numbers from 1 to 10. The computer will stop at 16. \n\n Pay attention to the screen to see what your total is. If you need another number, press `y`.");

alert("Now, it is the user's turn.");

function randomNumber(){
   var computerNumber = 0
   return randomNumber()
}

var computerNumber = 0;

function number()
alert(`The random number is ${number}`)

do {
   var randomNumber = Math.floor(Math.random() * 10) + 1

   computerNumber = computerNumber + randomNumber 

   alert(`Computer new number is ${randomNumber}.\n\n Computer total is now ${computerNumber}`)


} while ( computerNumber < 16 )

function computerNumber(){
   var ran = Math.floor(Math.random()* 5)+1
   return ran
}
console.log(computerNumber())

function userNumber(){
   var user = number(prompt(`Human new number is ${computerNumber}`))
   return user
}

function comparingNumber(){
   if (computer == human){
   alert(`Great! We were thinking of number ${user}!`)

   
   }else{
      alert(`Sorry. We were thinking of number ${computer}.`)
   }
}

alert(`We exit the loop. Computer total is ${computerNumber}`)

alert(`Would you like to add another number? If so, press enter.`);

var computerNumber = 0;

do {
   var randomNumber = Math.floor(Math.random() * 10) + 1

   computerNumber = computerNumber + randomNumber 

   alert(`Computer new number is ${randomNumber}.\n\n Computer total is now ${computerNumber}`)


} while ( computerNumber < 16 )


alert(`We exit the loop. Computer total is ${computerNumber}`);

function askUser(){
   var ask = user(prompt(`Would you like to play this game again? If so, press y. If not, press n.`))
   return ask
}