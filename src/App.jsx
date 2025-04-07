import { useState} from "react"

function App(){

  

  const Formulario = (props) => {
    const [nome, setNome] = useState('Rodorfooooooo')
    return(
      <div>
        <h3>{props.titulo}</h3>
        <input className='nome' 
      placeholder="Digite seu nome..."
      onChange={(e)=>{ setNome(e.Target.value)}}
      name="nome"
      type='text'/>
      <button className='botao' onClick={
        ()=> {
          if(nome.length > 0)
        alert(nome)
          else
        alert(props.mensagem)
        }
      }>
        CLIQUE AQUI
      </button>
      </div>
    )
  }
 
  return (
    <div>
      <h3> Pizaria 2B</h3>
     <Formulario titulo = "Nome" mensagem = "Peixe"/>
     <Formulario titulo = "E-mail" mensagem = "gamba"/>
     <Formulario titulo = "CPF" mensagem = "porcos"/>
     <Formulario/>
     <Formulario/>
     <Formulario/>
    </div>

  )
}

export default App