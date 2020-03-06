import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';


const BotonReus = ({title, onClick}) => {
    return (
        <Button 
            variant="warning"
            onClick = {onClick}>
            {title}
        </Button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default BotonReus;