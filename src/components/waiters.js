import React from 'react'
import{Nav, Col, Row}  from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Dialog from './dialog'


const Waiters = props => {
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
          <Dialog title = "aca va template de  menu desayuno"/>
        </TabPane>
        <TabPane eventKey="second">
          <Dialog title = 'aca va template de menu almuerzo' />
        </TabPane>
      </TabContent>
    </Col>
  </Row>
</TabContainer>
  
  </div>
}

export default Waiters