import { useState } from "react"

const Assento = (props)=>{
    const [ disabled,setDisabled ] = useState(false)
    function handeClick(){
        setDisabled(true)
    }
    return(
        <button className="assento"
        type="button"
        disabled={disabled}
        onClick= {()=> handeClick()}>
            {disabled?'X':props.pos}
        </button>
    )
}
const Fileira= (props)=>{
    return (
        <div className="fileira">
            {
                [0,1,2,3].map((pos,index)=>{
                  return  <Assento key={index} pos={props.de +pos} ></Assento>
                })
            }
        </div>
    )
}

export const AssentoOnibus= ()=>{
    return (
        
        <div className="container">
            teste    
            {
                [1,5,9,13,17].map((pos,index)=>{
                   return <Fileira key={index} de ={pos}/>
                })
            }
        </div>
    )
}