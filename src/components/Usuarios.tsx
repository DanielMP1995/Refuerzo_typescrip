import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes'
import { ListaUsuarios, Usuario } from '../interfaces/listausuarios';

export const Usuarios = () => {
    //generar un arreglo de usuario

    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        //peticion a la api

        reqResApi.get<ListaUsuarios>('/users')
            .then(resp => {
                setUsers(resp.data.data);
            })
            .catch(console.log);
    }, [])

    //funcion que repite las filas necesarias  en la tabla para mostrar los usuarios
    const itemRoseTable = ({ first_name, last_name, email,avatar }: Usuario) => {


        return (
            <tr>
                <td>
                    <img src={avatar} alt={first_name} style={{
                        width:90,
                        borderRadius:85
                    }}/>
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )

    }


    return (
        <div>
            <h3>Lista de Usuarios - usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) => itemRoseTable(usuario))
                    }
                </tbody>
            </table>
        </div>
    )
}
