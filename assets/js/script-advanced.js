// create a div in the html with id = "choices" and another h2 element with id = result
// JS will populate this div with elements

const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice, computerChoice) 
}

choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', you win!'
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', you lose!'
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', it\'s a draw!'
            break
        
    }
}
