import React, { Component } from 'react';


class NameNave extends Component {

    render() {
        let saludo = 'Bienvenido';
        return (
            <div className='Name'>
                <h1>{saludo}</h1>
     
            </div>
        );
    }
}

export default NameNave
