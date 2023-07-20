import { ThemeContext } from "./App";
const voosDisponíveis = [
    {
        id:'123',
        title: "Volta ter. 19 de Julho",
        details:[
            {
            id: '132',
            title:"Espaço para pernas"
        },
        {
            id: '133',
            title:"Vídeo sob demanda"
        },
        {
            id: '134',
            title:"Saída usb no assento"
        },
        {
            id: '135',
            title:"Estima das emissoes de Carbono: 83kg"
        }]
    },
    {
        id:'151',
        title: "13:00 - 15:00",
        details:[
            {
            id: '132',
            title:"Espaço para pernas"
        },
        {
            id: '133',
            title:"Vídeo sob demanda"
        },
        {
            id: '134',
            title:"Saída usb no assento"
        },
        {
            id: '135',
            title:"Estima das emissoes de Carbono: 83kg"
        }]
    }
]

function ItemVooDetails({ details }) {
  return (
    <ThemeContext.Consumer>
      {
        (value)=>{
          return (
          <ul>
            {details.map((detail) => {
              return <li key={detail.id} style={{color:value.color,fontFamily:value.font}}>{detail.title}</li>;
            })}
          </ul>
        );
          
        }
      }
      
    </ThemeContext.Consumer>
  );
}
function ItemVoo({ title, children }) {
  return (
    <div className="voo">
      <header>
        <h3>{title}</h3>
      </header>
      <div className="voo-details">
        {children}
      </div>
    </div>
  );
}

export default function Voos() {
  return (
    <div className="voos">
      {voosDisponíveis.map(voo => {
        return (
          <ItemVoo key={voo.id} title={voo.title}>
            <ItemVooDetails details={voo.details}/> 
          </ItemVoo>
        );
      })}
    </div>
  );
}



