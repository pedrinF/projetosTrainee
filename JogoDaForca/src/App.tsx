
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'

const words = ['luffy', 'zoro', 'sanji', 'nami', 'chopper', 'robin', 'brook', 'franky', 'jinbei', 'usopp']
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter)) 
  const [wins, setWins] = useState(0)
  const [loses, setLoses] = useState(0)
  const isLoser = incorrectGuesses.length >=6
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))
  const [isGameEnded, setIsGameEnded] = useState(false)
  
  const  addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) ) return

    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
  }, [guessedLetters])
  
  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/) || isGameEnded) return
      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener
    document.addEventListener('keypress', handler)

    return(() => {
      document.removeEventListener('keypress', handler)
    })

  }, [addGuessedLetters, guessedLetters, isGameEnded])

  const resetGame = () => {
    setGuessedLetters([])
    setIsGameEnded(false)
    const newWord = words[Math.floor(Math.random() * words.length)]
    setWordToGuess(newWord)
    if (isWinner) {
      setWins(wins + 1)
      return
    }
    if (isLoser) {
      setLoses(loses + 1)
    }
  }
  
  

  return (
    <div className="App">
      <div className='nav-button'>
        <button onClick={resetGame}><img src='./images/logo.png'></img></button>
        <h1>Advinhe o nome do Mugiwara!</h1>
      </div>
      <div className='game'>
        <p>{isWinner && "Você ganhou! Parabéns."}{isLoser && "Você perdeu. Tente novamente!"} </p>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length}/>
        <HangmanWord reveal={isLoser}guessedLetters={guessedLetters} word={wordToGuess}/>
        <div style={{fontSize: "2rem", textAlign: "center"}}> </div>
        <Keyboard 
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectGuesses}
          addGuessedLetters={addGuessedLetters}
        />
        <p>Partidas Ganhas: {wins} \\ Partidas Perdidas: {loses}</p>
        <button onClick={resetGame}>Reiniciar Partida</button>
      </div>
    </div>
  )
}

export default App
