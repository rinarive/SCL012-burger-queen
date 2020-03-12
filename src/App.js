import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




// componentes
import ButtonsRol from './components/buttonsRol';
import Formulario from './components/formulario';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }


  render() {
    return (

      <div className="App">
        <header className="App-header">
            {this.state.isEmptyState && <Formulario addTrip={this.triggerAddTripState} />}

            {this.state.isAddTripState && <ButtonsRol />}
        </header>
     
       
      </div>

    )
  }
  

}

export default App; 
