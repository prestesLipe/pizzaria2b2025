import { useState} from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return (
    <div>
      <h3> Pizaria 2B</h3>
      <input className='nome' 
      placeholder="Digite seu nome..."
      onChange={(e)=>{ setNome(e.Target.value)}}
      name="nome"
      type='text'/>
      <button className='botao' onClick={()=>alert(nome)}>
        CLIQUE AQUI
      </button>
    </div>

  )
}

export default App