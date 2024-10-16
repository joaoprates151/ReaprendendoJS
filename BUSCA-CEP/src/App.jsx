import './App.css'
import icone from './imagens/icone-mapa.png'
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [bairro, setBairro] = useState("");

  function buscarCep(){
    if (cep.length === 8) {
      console.log('foi')
      const fetchData = async () => {
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            try {
                const resposta = await axios.get(url);
                setLocalidade("Cidade: " + resposta.data.localidade);
                setBairro("Bairro: " + resposta.data.bairro);
                setLogradouro("Logradouro: " +resposta.data.logradouro);
              } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
      }

      fetchData();
      setCep("")
    }
  }

  return (
    <div className='container'>
      <input type="number" placeholder='Cep:' value={cep} onChange={(e) => setCep(e.target.value)}/>  
      <button onClick={buscarCep}><img src={icone} alt="buscar" className='icone' /></button>
      <div className='dados'>
        <p>{localidade}</p>
        <p>{logradouro}</p>
        <p>{bairro}</p>
      </div>
    </div>
  )
}

export default App
