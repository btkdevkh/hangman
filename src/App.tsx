import { useCallback, useState } from 'react'
import dictionary from '../data/dictionary.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

const radndomWord = () => dictionary[Math.floor(Math.random() * dictionary.length)]

function App() {
  const [guessWord] = useState(radndomWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])   
  
  const incorrectLetters: string[] = guessedLetters.filter(letter => !guessWord.includes(letter.toLowerCase()))
  const isLoser = incorrectLetters.length >= 6
  const isWinner = guessWord
    .split("")
    .every(letter => guessedLetters.includes(letter.toUpperCase()))

  const addGuessWord = useCallback((key: string) => {
    if(guessedLetters.includes(key) || isLoser || isWinner) {
      return
    }
  
    setGuessedLetters(prev => [...prev, key])       
  }, [guessedLetters, isLoser, isWinner])
  
  const handleClickOnKeyboard = (key: string) => {
    addGuessWord(key)
  }

  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      margin: "0 auto",
      fontFamily: "Arial"
    }}>
      <div style={{ fontSize:"2rem", textAlign: "center" }}>
        {isLoser && "Not bad at all, Try again"}
        {isWinner && "Bravo !"}
      </div>

      <HangmanDrawing 
        incorrectLetters={incorrectLetters}
      />

      <HangmanWord 
        guessWord={guessWord} 
        guessedLetters={guessedLetters}
        isLoser={isLoser}
      />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard 
          handleClickOnKeyboard={handleClickOnKeyboard}
          guessedLetters={guessedLetters}
          incorrectLetters={incorrectLetters}
          disabled={isLoser || isWinner}
        />
      </div>

    </div>
  )
}

export default App
