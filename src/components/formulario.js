import React, { Fragment,Component } from "react";
import Dialog from './dialog'
class Formulario extends Component {
constructor(props){
    super(props);
    this.state = {
       value: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
}
  
    handleInputChange (event){
    
        this.setState({
            ...this.state,
            name: event.target.value,
            password:event.target.value});
    }

    enviarDatos (event) {
        event.preventDefault()
        console.log('enviando datos...' + this.state.name);
        event.preventDefault();
    }

render(){

    return (
        <Fragment>        
            <div className="flex-column">
            <Dialog title = "Bienvenido a Burguer Queen"/>
            <form className="row" onSubmit={this.enviarDatos}>
                <div className="col-md-3">
                    <input type="name" 
                    placeholder="Nombre" 
                    className="form-control"
                    name ={this.state.name} 
                    onChange={this.handleInputChange}>

                    </input>
                </div>
                <div className="col-md-3">
                    <input type="password"
                     placeholder="Password" 
                     className="form-control"
                     password={this.state.password}
                     onChange={this.handleInputChange} >

                     </input>
                </div>

                <button type="submit"
                 value="Submit"
                 onClick={this.props.addTrip} 
                 className="btn btn-primary">Enviar</button>
            </form>
            </div>
        
        </Fragment>
    );
}
}

export default Formulario;