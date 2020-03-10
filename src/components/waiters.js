import React from 'react'
import{Nav, Col, Row}  from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Dialog from './dialog'


<<<<<<< HEAD:src/components/sectionLeft.js

const LeftMesero = props => {
=======
const Waiters = props => {
>>>>>>> 2709e779dde7490b5f6bf840b9e6ebd7c2114680:src/components/waiters.js
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
<<<<<<< HEAD:src/components/sectionLeft.js
        <Saludo />
=======
          <Dialog title = "aca va template de  menu desayuno"/>
>>>>>>> 2709e779dde7490b5f6bf840b9e6ebd7c2114680:src/components/waiters.js
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