import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Categories() {
    return (
        <>
        <h3 style={{marginTop:"2%",textAlign:"center",color:"#981041"}}>Categories</h3>
        <Container className="grid">
        <Row className="row">
        <Col className="grid__element">
        
        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216"}}>
        <Link to="/signup">
        <Card.Img height="200px" variant="top" src="/images/dis.jpg" />
        <Card.Body>
        <Card.Title style={{textDecoration:"none",color:"white"}}>Disaster Management Support</Card.Title>
        </Card.Body>
        </Link>
        </Card>

        </Col>
        <Col>

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%"}}>
        <Card.Img height="200px" variant="top" src="/images/ts.jpg" />
        <Card.Body>
        <Card.Title>Technical Support</Card.Title>
        </Card.Body>
        </Card>
        
        </Col>
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%"}}>
        <Card.Img height="200px" variant="top" src="/images/tut.jpg" />
        <Card.Body>
        <Card.Title>Food Supply</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        </Row>

        <Row className="row">
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%"}}>
        <Card.Img height="200px" variant="top" src="/images/blood.jpg" />
        <Card.Body>
        <Card.Title>Blood Donation</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%"}}>
        <Card.Img height="200px" variant="top" src="/images/tut.jpg" />
        <Card.Body>
        <Card.Title>Tutoring</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%"}}>
        <Card.Img height="200px" variant="top" src="/images/pain.jpg" />
        <Card.Body>
        <Card.Title>Pain and Palliative</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        </Row>

        </Container>
        </>
    )
}

export default Categories
