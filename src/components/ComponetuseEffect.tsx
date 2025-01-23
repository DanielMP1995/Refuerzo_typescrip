import { useEffect, useState } from "react"


export const ComponetuseEffect = () => {
//permite cambiar el estado de la variable.arreglo.componente.etc

const [bandera, setbandera] = useState<boolean>(false);

//hook useEffect : peromite ejecutar secundarios en componentes
//se ejecuta cuando existe lista de dependencias
const cambiarBandera =(): void => {
  setbandera(!bandera);
}



useEffect(() =>{
    //codigo a ejecutar
    console.log('desde el useEffect');
},[bandera]);

  return (
    <div>
        <h3>HOOK USEEFFECT</h3>
        <button onClick={cambiarBandera}>cambiar</button>
    </div>
  )
}
