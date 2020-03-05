import React, { Component } from 'react';


class Saludo extends Component {

    render() {
        let saludo = 'Burguer Queen';
        return (
            <div className='Name'>
                <h1>{saludo}</h1>
     
            </div>
        );
    }
}

export default Saludo
