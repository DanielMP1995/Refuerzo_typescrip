export const ObjetosLiterales = () => {

    //interface, siempre crear para un objeto
    interface Persona {
        nombre: String;
        apellido: string;
        edad: number;
        direccion:Direccion;  //este inteface debe declararse en la parte inferior

    }

    interface Direccion{     //le pones aqui el interface de Direccion
        pais:string;
        casaNumero: number;
    }
    
    
    //objeto
    const persona: Persona = {
        nombre: 'viviana',
        apellido: 'Flores',
        edad: 32,
        direccion: {            //objeto anidado
            pais: 'ecuador',
            casaNumero: 365
        }
    }

    //ingresar propiedades del objeto
    persona.nombre ='Ronnie Arial'; //se puede ingresar estos datos tambien
    //no se pueden intanciar las interfaces
    //const personaObject =new Persona();
    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>

        </div>
    )
}

