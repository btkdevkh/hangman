type Props = {
  guessWord: string,
  guessedLetters: string[],
  isLoser: boolean
}

export default function HanmanWord(props: Props) {
  const { guessWord, guessedLetters, isLoser } = props  
  
  return (
    <div style={{
      display: "flex",
      gap: ".25em",
      fontFamily: "monospace",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase"
    }}>
      {guessWord.split("").map((letter, idx) => (
        <span key={idx} style={{ borderBottom: ".1em solid black" }}>
          <span 
            style={{ 
              visibility: guessedLetters.includes(letter.toUpperCase()) || isLoser ? "visible" : "hidden",
              color: !guessedLetters.includes(letter.toUpperCase()) && isLoser ? "red" : "black"
            }}
          >{letter}</span>
        </span>
      ))}
    </div>
  )
}
