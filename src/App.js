import React, { Component } from 'react';
import './assets/css/App.css';



// componentes
import Saludo from './components/saludo';
import ButtonsRol from './components/buttons';
import Formulario from './components/modal';
import LeftMesero from './components/sectionLeft';



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
       
          <section className="componentes">
          <Saludo />
          </section>
       
            <div className="flex-column">
              {this.state.isEmptyState && <Formulario  addTrip={this.triggerAddTripState} />}

              {this.state.isAddTripState && <ButtonsRol/>}
            </div>
        
        </header>
        <div >
         < LeftMesero/>
        </div>

      </div>

    )
  }

}
export default App; 
