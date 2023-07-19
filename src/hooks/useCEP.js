import { useEffect , useState} from "react"


export const useCEP = (cep) => {

    const [endereco,setEndereco] = useState({});
    const fetchCEP = (cep) =>{
        fetch(`https://viacep.com.br/ws/${cep}/json`)
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