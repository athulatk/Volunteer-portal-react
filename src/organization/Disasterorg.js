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
            <Col sm={3}>
            <Urgentsorg/>
            </Col>
            <Col sm={9}>
            <Postvieworg/>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Disasterorg
