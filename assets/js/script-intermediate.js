// create a div in the html with id = "game" 
// JS will populate this div with elements

const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
// place all of the above into the game grid using append method
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

// create an array of choices
const choices = ['rock', 'paper', 'scissors']
let userChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice

}

// create three buttons, loop through each of the choices
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] // you can delete this if you want to use e.target.innerHTML in the handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}