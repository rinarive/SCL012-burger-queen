import React, { Component } from 'react'
import{Nav, Col, Row}  from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Dialog from './dialog'


class Waiters extends Component{
  state = {
    client: "",
    table: "",
    order: []
  };

  actualizarCliente(nombreCliente) {
    this.setState({
      client: nombreCliente
    });
  }

  actualizarMesa(numeroMesa) {
    this.setState({
      table: numeroMesa
    });
  }
 
  // Actualiza el estado global
  addOrder(item) {
    this.setState(previousState => ({
      order: [...previousState.order, item]
    }));
    console.log(this.state.order);
  }


render(){

  return <div>


   <TabContainer id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Desayuno</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Almuerzo/Cena</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tercero">Comandas</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <TabContent>
        <TabPane eventKey="first">
          <Dialog title = "aca va template de  menu desayuno"/>
        </TabPane>
        <TabPane eventKey="second">
          <Dialog title = 'aca va template de menu almuerzo' />
        </TabPane>
        <TabPane eventKey="tercero">
          <Dialog title = 'aca va template de comandas listas' />
        </TabPane>
      </TabContent>
    </Col>
  </Row>
</TabContainer>
  
  </div>
}
}

export default Waiters