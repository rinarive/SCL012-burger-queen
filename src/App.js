import React, { Component } from 'react';
import './assets/css/App.css';

<<<<<<< HEAD

// componentes
import Saludo from './components/saludo';
import ButtonsRol from './components/buttons';
import Formulario from './components/modal';



=======
// componentes
import ButtonsRol from './components/buttonsRol';
import Formulario from './components/formulario';
>>>>>>> 2709e779dde7490b5f6bf840b9e6ebd7c2114680

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
       

<<<<<<< HEAD
              {this.state.isAddTripState && <Formulario />}
            </div>
        
        </header>
        <div >
        
        </div>
=======
            {this.state.isEmptyState && <Formulario addTrip={this.triggerAddTripState} />}
            
         
            {this.state.isAddTripState && <ButtonsRol />}


>>>>>>> 2709e779dde7490b5f6bf840b9e6ebd7c2114680

        </header>
       
      </div>

    )
  }
  

}

export default App; 
