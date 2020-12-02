import React from 'react'
import Navbar3 from './components/Navbar3'
import Navbar2 from './components/Navbar2'
import Urgentneeds from './components/Urgentneeds'
import Postview from './components/Postview'
import {Row,Col} from 'react-bootstrap'

function Disaster() {
    return (
        <div>
            <Navbar3/>
            <Navbar2/>
            <Row>
            <Col sm={3}>
            <Urgentneeds/>
            </Col>
            <Col sm={9}>
            <Postview/>
            </Col>
            </Row>
        </div>
    )
}

export default Disaster
