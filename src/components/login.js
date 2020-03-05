import React, { useState} from "react";
import Formulario from "./modal";


const Login = (props) =>{

        
        const [view,setView] = useState({
            cocina: viewCocina,
            mesero : viewMesero
        })
        const enviar = (onClick) => {
            
            setView({
                ...view,
                [onClick.useState.name] : onClick.useState.props
            })
        }
        

        return (
            {enviar}

    
        )
}


export default Login

// const [datos, setDatos] = useState({
//     name:'',
//     password:''
// })
// const handleInputChange = (event)=>{
//     setDatos({
//         ...datos,
//         [event.target.name]: event.target.value
//         })
// }
// const enviarDatos = (event) => {
//     event.preventDefault()
//     console.log('enviando datos...' + datos.name + ' '+ datos.password)
// }
