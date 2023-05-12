'use strict'

// select all elements
const container = document.querySelector('.container')
const secretNumberEl = document.querySelector('.secret_number')
const guessInput = document.querySelector('.guess')
const messageEl = document.querySelector('.message')
const score = document.querySelector('.score')
const highScoreEl = document.querySelector('.high_score')

// select all buttons
const btnReset = document.querySelector('.reset')
const btnCheck = document.querySelector('.check')

// declare all variables
let secretNumber = Math.trunc(Math.random() * 20) + 1
let userScore = 20
let highestScore = 0

// secretNumberEl.textContent = secretNumber // just for experiment

btnCheck.addEventListener('click', function() {
  // changes user input type from string to number
  const userNumber = +guessInput.value

  // if user does not add any number
  if(!guessInput.value) {
    messageEl.textContent = 'No Number'
  }

  // if user number is less than our secret number show too low message
  if(userNumber < secretNumber) {
    messageEl.textContent = 'Too Low'
    userScore--
    score.textContent = userScore
  }

  // if user number is higher than our secret number
  if(userNumber > secretNumber) {
    messageEl.textContent = 'Too High'
    userScore--
    score.textContent = userScore
  }

  if(userNumber === secretNumber) {
    messageEl.textContent = 'Correct Number!'
    container.style.backgroundColor = 'green'
    highestScore = userScore
    console.log('highestScore', highestScore);
    highScoreEl.textContent = highestScore
    secretNumberEl.textContent = secretNumber
  }

})

btnReset.addEventListener('click', function() {
  userScore = 20
  score.textContent = userScore
  guessInput.value = ''
  secretNumberEl.textContent = '?'
  container.style.backgroundColor = 'black'
  messageEl.textContent = 'Start guessing...'
  secretNumber = Math.trunc(Math.random() * 20) + 1
})