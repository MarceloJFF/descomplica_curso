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


function MeuBotao(){
  const label = "clique aqui 2"
  return (
    <button type='button'>{label}</button>
  )
}
function App() {
  return (
    <div className="App">
      <Saudacao name = "Marcelo" idade = "30"/>
      <article>
        <h2>Subtitulo</h2>
        <p>OAosklas</p>
      </article>
      <MeuBotao/>
    </div>
  );
}

export default App;
