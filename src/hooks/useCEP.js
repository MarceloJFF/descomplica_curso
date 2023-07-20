import { useEffect , useState} from "react"
import { useSettingsContext } from "../App";

export const useCEP = (cep) => {

    const [endereco,setEndereco] = useState({});
    const value = useSettingsContext()
    const fetchCEP = (cep) =>{
        fetch(`${value.cepUrlBase}/ws/${cep}/json`)
        .then(dados=> dados.json())
        .then(endereco => {
            setEndereco(endereco)
        })
    }

        //toda vez que vier um novo cep
        useEffect(() => {
            fetchCEP(cep)
        }, [cep]);
    return endereco;
}