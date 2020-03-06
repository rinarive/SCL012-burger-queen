import React, {Fragment, useState } from "react";


const Formulario = (props) => {

    const [datos, setDatos] = useState({
        nombre: '',
        password: ''
    })

    const handleInputChange = (event) => {
     
      setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.password)
    }

    return (
        <div>

        <Fragment>
           
            <form className="row" onSubmit={enviarDatos}>
              
                <h3>Dime quien eres...</h3>
                <div className="col-md-3">
                    <input type="name" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>  
                <div className="col-md-3">
                    <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
         
                <button type="submit"onClick={props.addTrip} className="btn btn-primary">Enviar</button>
            </form>
            <ul>{datos.nombre}</ul>
        </Fragment>

     

        </div>
    );
}

export default Formulario;