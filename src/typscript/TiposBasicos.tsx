//rafc+enter

export const TiposBasicos = () => {
    //variable
    //let nombre:string | number ='Daniel'; //la linea del centro es operador tuberia
    //nombre=123; //para cambiar la variable y poder poner que sea string y numerico
    //constante}

    const nombre: string='Daniel';
    const edad: number= 29;
    const donanteOrganos: boolean=true;
    //arreglos
    const poderes :string[] = ['velocidad','volar','invisibilidad'];
    //agregar datos en arreglo
    poderes.push('fuerza'); 


    return (
        <div>
            <h3>Tipos Basicos</h3>
            {nombre} <br />  {edad}  <br /> {donanteOrganos ? 'donante' : 'no donante'} {/*se utiliza ternario*/}
            <br />
            {poderes.join(' , ')} {/* join es para poder vizualizar,  llamas todos los poderes y va separando con una ,*/}
        </div>
    )
}
