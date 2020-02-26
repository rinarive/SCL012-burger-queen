import React from 'react';

import './assets/css/App.css';

//importar componentes
import NameNave from './components/NameNave';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          hola mundo
        </p>
        <section className="componentes">
          <NameNave />
        </section>

      </header>

    </div>
  );
}

export default App;
