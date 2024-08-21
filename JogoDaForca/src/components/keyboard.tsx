import styled from "styled-components"

const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
`
const Button = styled.button<{ isActive: boolean}>`
  &:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
  &:focus-visible:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
  &:hover:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
`

interface KeyBoardProps{
  activeLetters: string[]
  inactiveLetters : string[]
  addGuessedLetters: (letter: string) => void
}

export default function Keyboard( {activeLetters, inactiveLetters, addGuessedLetters}: KeyBoardProps) {
  return (
    <Wrapper>
      {keys.map((letter) => {
        const isActive = !activeLetters.includes(letter)
        const isInactive = !inactiveLetters.includes(letter)
        return (
            <Button onClick={() => addGuessedLetters(letter)} disabled={!(isActive && isInactive)} isActive={isActive && isInactive} key={letter} style={{color: 'white',backgroundColor: 'blue'}}>{letter.toUpperCase()}</Button>
        )
      })}
    </Wrapper>
  )
}
