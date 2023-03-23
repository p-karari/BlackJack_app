
// let countEl = document.getElementById("count-el")
// let count = 0 
// function increment() {
//    count += 1
//    countEl.innerText = count

// }

// function save() {
//    saveEl = document.getElementById("save-el")
   
//    saveEl.innerText += " " + count + " -  "
//    console.log(saveEl)
   
//    countEl.innerText = 0
//    count = 0
// }


// let welcomeEl = document.getElementById("welcome-el")

// let Name = "Lvin"
// let greeting = "Hi , my name is "

// welcomeEl.innerText = greeting + Name

// let num1 = 10
// let num2 = 5
// document.getElementById("num-1").textContent = num1
// document.getElementById("num-2").textContent = num2

// function addFunction() {
//    let ans = document.getElementById("total").textContent  = num1 + num2
// }
// function subtractFunction() {
//    let ans = document.getElementById("total").textContent = num1 - num2
 
// }
// function divideFunction() {
//    let ans = document.getElementById("total").textContent = num1 / num2

// }
// function multiplyFunction() {
//    let ans = document.getElementById("total")
//    ans.textContent = num1 * num2
   
// }

// console.log(5 === 2)
// console.log(3 > 2)




let firstCard = 6

 let secondCard = 9
 let sum = firstCard + secondCard
let gameStatus = document.getElementById("game-status")
let card1 = document.getElementById("cards").textContent = ("Cards :") + firstCard + "   " + secondCard
let sumEl = document.getElementById("sum-el").textContent = ("Sum :") + sum
function renderGame() {
        startGame()
    }
function startGame() {
    let sumEl = document.getElementById("sum-el").textContent = ("Sum :") + sum
    if (sum <= 20) {
        gameStatus.textContent = ("Do you want to draw a new card? ")
        console.log("Do you want to draw a new card? ")
    }
    else if (sum === 21) {
        gameStatus.textContent = ("You've got Blackjack!")
        console.log("Whoo! you've got blackjack!")
    }
    else {
        gameStatus.textContent = ("You're out of the game!")
        console.log("You're out of the game!")
    }

    
}
function newCard() {
    
    let drawedcard = 4
    sum += drawedcard
    console.log(sum)
    renderGame()

}


