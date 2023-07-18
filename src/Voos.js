
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
function ItemVoo(props){

    return(
        <div className="voo">
            <header>
                <h3>{props.title}</h3>
            </header>
        </div>
    )
}

function Voos(){
    
    return(
               
       <div className="voos">
        <h1>Voos</h1>
        {
            voosDisponíveis.map(voo =>{
                <ItemVoo key={voo.id} title={voo.title} details={voo.details} />
            })
        }
        </div>
        
    )
}

export default Voos;