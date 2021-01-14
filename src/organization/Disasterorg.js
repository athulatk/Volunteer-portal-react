import React from 'react'
import Navbar4 from '../components/Navbar4'
import Navbar2 from '../components/Navbar2'
import Urgentsorg from './components/Urgentsorg'
import Postvieworg from './components/Postvieworg'
import {Row,Col,Container} from 'react-bootstrap'

function Disasterorg({match}){
    console.log(match)
    return (
        <div>
            <Navbar4/>
            <Navbar2/>
            <Container fluid>
            <Row>
            <Col lg={3} style={{padding:'0'}}>
            <Urgentsorg type={match.params.type}/>
            </Col>
            <Col lg={9} style={{padding:'0'}}>
            <Postvieworg type={match.params.type} url={match.url}/>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Disasterorg
