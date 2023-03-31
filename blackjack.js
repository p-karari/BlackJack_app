let buttons = document.querySelectorAll("#btn")
let text = document.querySelectorAll(".txt")
let cards_value = document.querySelectorAll("#cards")
let random_card
let sum = 0
let new_card
let sumValue = ("sum : ")
let sum1
cards_value[1].textContent = sumValue
let cardValue = ("cards : ")

cards_value[0].textContent = cardValue



cards[1].textContent = sumValue
text[0].textContent = ("~~  click start game button to begin  ~~")
text[1].textContent = (" ~~~~")

function newGame(){
    random_card = Math.floor(Math.random() * 20)
    cardValue = cardValue + random_card
    text[0].textContent = ("~~  Game in progress  ~~")
    cards_value[0].textContent = cardValue
    cards_value[1].textContent = sumValue
    text[1].textContent = (" ~~~~")
    return random_card
}

function newCard(){
    
    new_card = Math.floor(Math.random()*15)
    cardValue += (" - ") + new_card 
    cards_value[0].textContent = cardValue
    sum1 = random_card + new_card
    random_card = 0
    return new_card
}

function printSum() {
    sum += sum1
    cards_value[1].textContent = sumValue + sum
    if(sum === 21) {
        text[1].textContent = ("~~  Whoo! you've got blackjack  ~~")
        text[0].textContent = ("~~  click start game button to restart  ~~")
        cardValue = ("cards : ")
        cards_value[0].textContent = cardValue
        cards_value[1].textContent = sumValue
        sum = 0
    } else if(sum < 21){
        text[1].textContent = ("~~  do you want to draw a new card  ~~")
    }else {
        text[0].textContent = ("~~  click start game button to restart  ~~")
        text[1].textContent = ("~~  You're out of the game  ~~")
       cardValue = ("cards : ")
       cards_value[0].textContent = cardValue
       cards_value[1].textContent = sumValue
        sum = 0
        sum1 = 0
        
    }
   

}

buttons[0].addEventListener('click' , function(){
    cards_value[0].textContent = cards_value
    newGame()
})

buttons[1].addEventListener('click' , function(){
    newCard()
    printSum()
})















