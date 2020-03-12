import React, { Fragment, Component } from 'react';
import{Row}  from 'react-bootstrap'
import ButtonGene from './buttonGene';
import Waiters from './waiters';
import Dialog from './dialog';

class ButtonsRol extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEmptyState: true,
            isEmptyStateCook: true,
         
        }
       
    }
  
    changeAddTripState = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isChangeStateCook : false,
            isEmptyStateCook: false,
            isChangeState: true
        })
    }

    changeAtCookState = () => {
        this.setState({
            ...this.state,
            isEmptyStateCook: false,
            isEmptyState : false,
            isChangeState: false,
            isChangeStateCook: true

        })
    }
 
    render() {

        return (
<<<<<<< HEAD
<<<<<<< HEAD
            <Fragment>
=======
            <Fragment >
>>>>>>> 32c437e963f7f72b04900c4694196d88b2bdecff
=======
            <Fragment >
>>>>>>> 02db0bbda52f5fed7038f88371bd2a62569dbfb0
                <Row>

                {this.state.isEmptyState && <ButtonGene title='Mesero' onClick={this.changeAddTripState} />}

                {this.state.isChangeState && <Waiters  />  }  {' '}
               
                {this.state.isEmptyStateCook && <ButtonGene title='cocina'  onClick={this.changeAtCookState} />}

                {this.state.isChangeStateCook && <Dialog title = "sirve"/>} {' '}

                </Row>
            </Fragment>
        )

    }
}

export default ButtonsRol

