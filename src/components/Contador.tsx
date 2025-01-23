import { useState } from "react"


export const Contador = () => {

    // hook useState: El cambio de estado de un componente, variable, constante, arreglo, etc
    //1. Variable , arreglo, etc
    //2. funcion que cambia el estado variable, arreglo, etc
    const [valor, setValor] = useState <number>(0);
    //cambiar estado mediante la funcion
    const contador=(numero: number):void =>{
        setValor(valor + numero)
    }

    const contadorLimpiar=(numero: number):void =>{
        setValor(valor * numero)
    }
    return (
        <div>
            <h3>Contador: <small>{valor}</small> </h3>
            <button className="btn btn-primary"
            onClick={()=>contador(1)}>+1
            </button>

            &nbsp;
            <button 
            className="btn btn-primary"
            onClick={()=>contador(-1)}>-1
            </button>
            &nbsp;
            <button 
            className="btn btn-primary"
            onClick={()=>contadorLimpiar(0)}>limpiar
            </button>
        </div>
    )
}