import Hangman from './hangman'
import getPuzzle from './request'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')

let game1


window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode) //read string from char code
    game1.makeGuess(guess)
    render()
    
})

const render = ()=>{
    puzzleEl.innerHTML = ''
    guessEl.textContent = game1.statusMessage
    const arrayPuzzle = game1.puzzle.split('')
    arrayPuzzle.forEach((letter)=>{
       const letterEl= document.createElement('span')
       letterEl.textContent=letter
       puzzleEl.appendChild(letterEl)

    })
    
}

const startGame = async()=>{
    const puzzle = await getPuzzle(3)
    game1 = new Hangman(puzzle,5)
    render()

}


document.querySelector('#reset').addEventListener('click',startGame)

startGame()