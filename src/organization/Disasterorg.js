import React from 'react'
import Navbar3 from '../components/Navbar3'
import Navbar2 from '../components/Navbar2'
import Urgentsorg from './components/Urgentsorg'
import Postvieworg from './components/Postvieworg'
import {Row,Col,Container} from 'react-bootstrap'

function Disasterorg() {
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <Container fluid>
            <Row>
            <Col lg={3} style={{padding:'0'}}>
            <Urgentsorg/>
            </Col>
            <Col lg={9} style={{padding:'0'}}>
            <Postvieworg/>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Disasterorg
