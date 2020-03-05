import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonsRol = props => {
 
        return (

            <div className = "buttons">
                <Button variant="warning" onClick={props.addTrip} >mesero</Button>{' '}
                <Button variant="warning"onClick={props.addTrip}>cocina</Button>
            </div>
        )

}

export default ButtonsRol

