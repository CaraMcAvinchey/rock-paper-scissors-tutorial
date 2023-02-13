// DOM content loaded event listener, delays activation of JS functions until DOM loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded")
})

let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()

}))

function generateComputerChoice ()