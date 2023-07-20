
import Voos from './Voos';
import { Fonts } from './Fonts';
import { AssentoOnibus } from './AssentoOnibus';
import { ViaCep } from "./ViaCep"
import { createContext,useState } from 'react';

const Saudacao = (props) => {
  return (
    <h2>
      <span> Olá</span>
      <strong> Mundo2</strong>
      <p>{props.name}, {props.idade}</p>
      !!!
    </h2>
  )
}


function MeuBotao(props) {
  const label = "clique aqui 2"
  return (
    <button type='button'>{label}</button>, <button type='submit'>{props.label}</button>

  )
}


function PessoaIdade(props) {
  return (
    <strong>{props.label}</strong>
  )
}
function Pessoa(props) {
  return (
    <section>
      Você é {props.idade >= 18 ? <PessoaIdade label="de maior" /> : <PessoaIdade label="de menor" />}
    </section>
  )
}
const ListItem = (props) => {
  return (
    <li><strong>{props.label}</strong></li>
  )
}

const Lista = () => {

  const passos = [
    "configurar projeto",
    "Embedar react",
    "Criar componentes",
    "Escrever testes"
  ]
  return (
    <ul>
      {passos.map((valor, index) => {
        return <ListItem key={`item-${index}`} label={valor} />
      })}
    </ul>
  )
}

export const ThemeContext = createContext({});



export default function App() {
  const[font,setFont] = useState('tahoma')
  const labelBtn = `clique aqui ${2}x`
  return (
    <div className="App">
      <ThemeContext.Provider value={{color:'orange',font,setFont}}>
        <Fonts/>
        <ViaCep />
        <AssentoOnibus />
        <Saudacao name="Marcelo" idade="25" />
        <Voos />
        <Lista />
        <Pessoa idade={19} />
        <Pessoa idade={16} />

        <article>
          <h2>Subtitulo</h2>
          <p>OAosklas</p>
        </article>
        <MeuBotao label={labelBtn} />
      </ThemeContext.Provider>
    </div>
  );
}

