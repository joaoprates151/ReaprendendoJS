import './App.css'
import { useState } from 'react';
import accept from './imagens/accept.png'
import close from './imagens/close.png'

function App() {
  const [nota01, setNota01] = useState();
  const [nota02, setNota02] = useState();
  const [texto, setTexto] = useState("");
  const [imagem, setImagem] = useState("");
  const [display, setDisplay] = useState("none")
  let media;

  function calcularMedia()
  {
     media = (nota01 + nota02) / 2;
    if(media >= 5)
    {
      setTexto(`Aprovado: ${media}`);
      setImagem(accept)
      setDisplay("block")
    }else
    {
      setTexto(`Reprovado: ${media}`);
      setImagem(close)
      setDisplay("block")
    }
  }

  return (
    <>
     <div className="container">
      <h1>Calculo de média</h1>
      <input type="number" max={10} min={0} value={nota01} id="" placeholder='Digite a 1° nota' 
      onChange={e=> setNota01(parseInt(e.target.value))}/>
      <input type="number" max={10} min={0} value={nota02} id="" placeholder='Digite a 2° nota'
      onChange={e=> setNota02(parseInt(e.target.value))}/>
      <button onClick={calcularMedia}>Calcular media</button>
      <div className="resultado">
        <p>{texto}</p>
        <img src={imagem} alt="" style={{width: 53,height: 53, marginTop: 8, marginLeft: 10, display: display}} />

      </div>
     </div>
    </>
  )
}

export default App
