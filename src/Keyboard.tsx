const KEYS = [
  "A", "B", "C", "D", "E",
  "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", 
  "Z"
];

import styles from './assets/Keyboard.module.css'

type Props = {
  handleClickOnKeyboard: (key: string) => void
  guessedLetters: string[],
  incorrectLetters: string[],
  disabled: boolean,
}

export default function Keyboard(props: Props) {
  const { 
    handleClickOnKeyboard, 
    guessedLetters, 
    incorrectLetters, 
    disabled
  } = props  
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
      }}
    >
      {KEYS.map((key, idx) => {
        const isInActive = incorrectLetters.includes(key)
        const isActive = guessedLetters.includes(key)
        return (
          <button 
            className={`
              ${styles.btn}
              ${isInActive ? styles.inactive : ""}
              ${isActive ? styles.active : ""}
            `} 
            disabled={
              isInActive ||
              isActive ||
              disabled
            }
            key={idx}
            onClick={() => handleClickOnKeyboard(key)}
          >{key}</button>
        )
      })}
    </div>
  )
}
