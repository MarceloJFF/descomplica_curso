import { useState, useEffect } from "react"
import { ThemeContext } from "./App";
const Assento = (props)=>{
    const [ disabled,setDisabled ] = useState(false)
    function handeClick(){
        disabled?setDisabled(false): setDisabled(true)
    }
    //sempre que acontece algo no ciclo de vida do componente
    useEffect(()=>{
        console.log("Nasceu")
    },[]); //[] sempre q o componente nascer/ toda vez que disable dmudar
    //disabled alterado
    useEffect(()=>{
        console.log("Disabled alterou para",disabled)
    },[disabled]);
    return(
        <ThemeContext.Consumer>
            {
                (valor)=>{
                    return(
                        <button className="assento"
                            type="button"
                            disabled={disabled}
                            onClick= {()=> handeClick()}>
                            {disabled?'X': <span style={{color:valor.color,fontFamily:valor.font}}>{props.pos}</span>}
                        </button>
                    ) 
                }

            }
            
        </ThemeContext.Consumer>
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