import logo from './logo.svg';
import './App.css';


const Saudacao = (props)=>{
  return (
    <h2>
      <span> Olá</span>
      <strong> Mundo2</strong>
      <p>{props.name}, { props.idade}</p>
      !!!
    </h2>
  )
}


function MeuBotao(props){
  const label = "clique aqui 2"
  return (
    <button type='button'>{label}</button>,<button type='submit'>{props.label}</button>

  )
}


function PessoaIdade(props){
  return (
    <strong>{props.label}</strong>
  )
}
function Pessoa(props){
  return (
    <section>
      Você é {props.idade>=18? <PessoaIdade label="de maior"/>: <PessoaIdade label =  "de menor"/>}
    </section>
  )
}
const ListItem = (props) => {
  return(
    <li><strong>{props.label}</strong></li>
  )
}

const  Lista = ()=>{

  const passos = [
    "configurar projeto",
    "Embedar react",
    "Criar componentes",
    "Escrever testes"
  ]
  return(
    <ul>
      {passos.map((valor,index)=>{
        return  <ListItem key={`item-${index}`}  label ={valor}/>
      })}
    </ul>
  )
}

function App() {

  const labelBtn = `clique aqui ${2}x`
  return (
    <div className="App">
      <Saudacao name = "Marcelo" idade = "30"/>
      <Pessoa idade={19}/>
      <Pessoa idade={16}/>
      <Lista/>
      <article>
        <h2>Subtitulo</h2>
        <p>OAosklas</p>
      </article>
      <MeuBotao label = {labelBtn} />
    </div>
  );
}

export default App;
