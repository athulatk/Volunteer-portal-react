import React from 'react'
import Navbar3 from './components/Navbar3'
import Navbar2 from './components/Navbar2'
import Urgentneeds from './components/Urgentneeds'
import Postview from './components/Postview'
import {Row,Col,Container} from 'react-bootstrap'

function Disaster() {
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <Container fluid>
            <Row>
            <Col lg={3} style={{padding:'0'}}>
            <Urgentneeds/>
            </Col>
            <Col lg={9} style={{padding:'0'}}>
            <Postview/>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Disaster
