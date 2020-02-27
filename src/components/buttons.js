import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class ButtonsRol extends Component {

    render() {
        let mesero = "mesero"
        let cocina = "cocina"
        return (
            <div className = "buttons">
                <Button variant="warning">{mesero}</Button>
                <Button variant="warning">{cocina}</Button>
            </div>
        )

    };
}
export default ButtonsRol
