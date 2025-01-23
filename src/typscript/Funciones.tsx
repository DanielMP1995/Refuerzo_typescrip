export const Funciones = () => {

    //funciones sin  parametros

    //const sumar =() : number =>{
     //   return 1+2;
    //}


    //funciones con parametros
    const sumar =(num1 : number,num2 : number): number=>{
        return num1+num2;
    }
    return (
        <div>
            <h3>FUNCIONES</h3>
            <span>El Resultado es:{sumar(5,6)}</span>
        </div>
    )
}
