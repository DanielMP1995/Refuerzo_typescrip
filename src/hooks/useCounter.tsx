import { useState } from "react"


export const useCounter = (inicial:number ) => {
    const [valor, setValor] = useState <number>(inicial);
    
    const contador=(numero: number):void =>{
        setValor(valor + numero)
    }

    return{
        valor,
        contador
    }
}
