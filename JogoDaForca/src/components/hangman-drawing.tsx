import styled from "styled-components"

const Base = styled.div`
  height: 6px;
  width: 150px;
  background: blue;
  `
const Traco = styled.div`
  height: 250px;
  width: 6px;
  background: blue;
`
const TracoMenor = styled.div`
  height: 50px;
  width: 6px;
  background: blue;
  position: absolute;
  right: -50px;
`
const Linha = styled.div`
  height: 6px;
  width: 125px;
  background: blue;
  position: absolute;
  right: -50px;
  top: 0;
`
const Cabeca = styled.div`
  height: 30px;
  width: 30px;
  border: 5px blue;
  border-radius: 50%;
  background: blue;
  position: absolute;
  right: -65px;
  top: 40px;
`
const Corpo = styled.div`
  height: 150px;
  width: 4px;
  background: blue;
  position: absolute;
  right: -50px;
  top: 0px;
`
const BracoDireito = styled.div`
  height: 4px;
  width: 50px;
  rotate: 45deg;
  background: blue;
  position: absolute;
  right: -90px;
  top: 85px;
`
const BracoEsquerdo = styled.div`
  height: 4px;
  width: 50px;
  rotate: -45deg;
  background: blue;
  position: absolute;
  right: -55px;
  top: 85px;
`
const PernaDireita = styled.div`
  height: 4px;
  width: 50px;
  rotate: 45deg;
  background: blue;
  position: absolute;
  right: -90px;
  top: 165px;
`
const PernaEsquerda = styled.div`
  height: 4px;
  width: 50px;
  rotate: -45deg;
  background: blue;
  position: absolute;
  right: -55px;
  top: 165px;
`
const PartesCorpo = [Cabeca, Corpo, BracoDireito, BracoEsquerdo, PernaDireita, PernaEsquerda]

interface HangmanDrawingProps {
  numberOfGuesses: number
}

export default function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
  return <div style={{
    position: 'relative', 
    display: "flex", 
    flexDirection: 'column',
    alignItems: 'center' }
  }>
    {PartesCorpo.slice(0, numberOfGuesses).map((ParteCorpo, index) => {
      return <ParteCorpo key={index}/>
    })}
    <TracoMenor/>
    <Linha/>
    <Traco/>
    <Base/>
  </div>
  
}
