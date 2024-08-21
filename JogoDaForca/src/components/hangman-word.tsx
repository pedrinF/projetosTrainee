import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5 rem;
  padding: 30px;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Verdana, sans-serif;
  color: blue;
`
interface HangmanWordProps{
  reveal: boolean
  word: string
  guessedLetters: string[]
}

export default function HangmanWord({reveal, word, guessedLetters}: HangmanWordProps) {
  

  return (
    <Wrapper>
      {word.split('').map((letter, index) => (
        <span 
        style={{borderBottom: '0.1em solid blue', height: '90px', margin: '5px', minWidth: '50px'}} key={index}>
          <span style={{visibility: guessedLetters.includes(letter) || reveal
            ?'visible'
            :'hidden'}}>
              {letter}
          </span>

        </span>))}
    </Wrapper>
  )
}
