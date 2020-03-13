import React, { Component } from 'react';
import '../App.css';
import './nameClient.css'



class NameClient extends Component {
 

    constructor(props) {
        super(props);
        this.state = {
           form:[]
        };
        this.handleInputChanges = this.handleInputChanges.bind(this);
        this.enviarDatos = this.enviarDatos.bind(this);
    }
  handleInputChanges(event) {
    this.setState({
        ...this.state,
        client: event.target.value,
        mesa: event.target.value
    });
}
   enviarDatos= (event)=>{
    event.preventDefault()

 }
 resetState() {
    this.setState({
      form: []
    });
  }
    render() {
        return (
        <div className='clientID'>
            <div className="titleClient"> 

                <div className='client' onSubmit={this.enviarDatos.bind(this)}ref='contactForm'>

                <p>Clientes:   </p>
                <input 
                onChange={this.handleInputChanges}
                className="form-control"
                placeholder="Nombre"
                type='name'
                name={this.state.name}
                ref={name => this.inputName = name} 
            
                />
                <p>Mesa:    </p>

                <select
                onChange={this.handleInputChanges}
                className="form-control"
                placeholder="Numero de mesa"
                type='number'
                name={this.state.mesa}
                > 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <button type="submit" onClick = {this.resetState.bind(this)} className="mesa">+</button>

            </div>
        </div>
               
    </div>
               
        )
    }

}

export default NameClient;