import axios from "axios";
//conexion a la api por constante
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api',
})