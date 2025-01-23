import { useEffect, useReducer } from "react"

export default function Login() {

  //interace
  interface AuthState {
    validando: Boolean; //es true o false
    token: string | null; // el | es para poder poner 2 opciones
    username: string;
    password: string;
  }

  //creando estado inicial , segundo parametro
  const inicialState: AuthState = { // con : se enlaza al interface
    validando: true,
    token: null,
    username: '',
    password: ''

  }
//type para parametros de las acciones

type loginPayload={
  username: string;
  password: string;
}


  type AuthAction = 
{type: 'logout'} | { type: 'login',payload: loginPayload }

  

  //funcion reducer - primer parametro

  const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
      case 'logout':
        return {
          validando: false,
          token: null,
          username: '',
          password: ''
        }
        case 'login':
          //desestructuracion de objetos
const{username,password}=action.payload;

          return{

            validando:false,
            token:'Easdnas7uyas7wnweb',
           // username:action.payload.username,
          //password:action.payload.password
          username: username,
          password: password

          }
      default:
        return state;

    }

  }



  //hook useReduces: perimite cambio de estados mas complejos
  const [state, dispatch] = useReducer(authReducer, inicialState);

  //hook useeffect
  useEffect(() => {
    //funcion de tiempo
    setTimeout(() => {  //colman
      //disparando la accion
      dispatch({ type: 'logout' })

    }, 1500);

  }, []);

  //funcion para disparar la accion de login

  const login=(): void => {
    dispatch({
        type:"login",
        payload:{
            username: "vflores",
            password: "vflores123*"
        }
    })
}
const logout=(): void => {
  dispatch({
      type:"logout",
      
  })
}

  //validadion para mostrara msj deacuerdo a la accion
  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          validando...
        </div>
      </>   //fracmen, para envolver varios dif y retornar un solo valor
    )
  }


  return (
    <div>
      <h3>Login</h3>
      {(state.token == null) 
      ? <div className="alert alert-danger">No Autenticado...</div>
      :<div className="alert alert-success">Autenticado...</div>
      }
      {
        (state.token==null)
        ?<button className="btn btn-primary" onClick={login}>Login</button>
        :<button className="btn btn-danger" onClick={logout}>Logout</button>
      }
      
      
      

    </div>
  )
}
