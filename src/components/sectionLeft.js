import React from 'react'
import{Nav, Col, Row}  from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Saludo from './saludo'



const LeftMesero = props => {
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
      </Nav>
    </Col>
    <Col sm={9}>
      <TabContent>
        <TabPane eventKey="first">
        <Saludo />
        </TabPane>
        <TabPane eventKey="second">
          <Saludo />
        </TabPane>
      </TabContent>
    </Col>
  </Row>
</TabContainer>
  
  </div>
}

export default  LeftMesero