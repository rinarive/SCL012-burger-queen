import React from 'react';
import './assets/css/App.css';



//importar componentes
import NameNave from './components/NameNave';
import ButtonsRol from './components/buttons';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <section className="componentes">
          <NameNave />
          <ButtonsRol/>

        </section>


      </header>

    </div>
  );
}

export default App;
