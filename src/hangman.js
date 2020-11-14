class Hangman{
    constructor(word,noOfGuesses){
        this.word = word.toLowerCase().split('')
        this.noOfGuesses = noOfGuesses
        this.guessedLetters = []
        this.status = 'playing'

    }
   get puzzle(){
        let wordPuzzle= ''

    this.word.forEach((letter) => {
        
            if(this.guessedLetters.includes(letter) || letter===' '){
                wordPuzzle+=letter
            }
            else{
                wordPuzzle+='*'
            }
      
        
    })

    return wordPuzzle

    }

    makeGuess(guess){
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if(this.status!=='playing')
        {
            return
        }
    
    
    
            if(isUnique){
    
                this.guessedLetters=[...this.guessedLetters,guess]
    
            }
            if(isUnique && isBadGuess)
            {
                this.noOfGuesses-=1
            }
    
        this.calculateStatus()

    }

    calculateStatus(){
        const flag = this.word.every((letter) => this.guessedLetters.includes(letter)|| letter===' ' )
        //console.log(flag)
    
        if(this.noOfGuesses===0){
            this.status='failed'
        }
        else if(flag)
        {
            this.status='finished'
        }
        else{
            this.status='playing'
        }

    }

    get statusMessage(){
            let status=``
        if(this.status==='playing')
        {
            status = `Guesses left : ${this.noOfGuesses}`
        }
        else if(this.status==='finished'){
            status=`Great Work! You guessed the word.`
        }else{
            status = `Nice Try! The word was "${this.word.join('')}"`

        }
        return status
    }



}

export {Hangman as default}



