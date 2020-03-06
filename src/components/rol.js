import React from 'react';
import { Component } from 'react';
import BotonReus from './button'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LeftMesero from './sectionLeft'
import Saludo from './saludo'



class ButtonsRol extends Component {

    render() {


        return (

            <div className="buttons">
                <Router>

                    <Link>
                        <BotonReus title='Mesero' path to='/mesero'> <link to='/mesero' /> </BotonReus>{' '}
                    </Link>
                    <Link>
                        <BotonReus title='Cocina' path to='/cocina'> <link to='/cocina' /> </BotonReus>
                    </Link>

                    <Route path="/mesero" component={LeftMesero} />
                    <Route path="/cocina" component={Saludo} />
                </Router>
            </div>
        )

    }
}
export default ButtonsRol


