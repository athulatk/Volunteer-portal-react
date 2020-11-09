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
        <Link to="/disaster" style={{textDecoration:"none"}}>
        <Card.Img height="200px" variant="top" src="/images/dis.jpg" />
        <Card.Body>
        <Card.Title style={{color:"white",textAlign:"center"}}>Disaster Management Support</Card.Title>
        </Card.Body>
        </Link>
        </Card>

        </Col>
        <Col>

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216"}}>
        <Card.Img height="200px" variant="top" src="/images/ts.jpg" />
        <Card.Body>
        <Card.Title style={{color:"white",textAlign:"center"}}>Technical Support</Card.Title>
        </Card.Body>
        </Card>
        
        </Col>
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216"}}>
        <Link to="/food" style={{textDecoration:"none"}}>
        <Card.Img height="200px" variant="top" src="/images/food.webp" />
        <Card.Body>
        <Card.Title style={{color:"white",textAlign:"center"}}>Food Supply</Card.Title>
        </Card.Body>
        </Link>
        </Card>

        </Col>
        </Row>

        <Row className="row">
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216"}}>
        <Card.Img height="200px" variant="top" src="/images/blood.jpg" />
        <Card.Body>
        <Card.Title style={{color:"white",textAlign:"center"}}>Blood Donation</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216"}}>
        <Card.Img height="200px" variant="top" src="/images/tut.jpg" />
        <Card.Body>
        <Card.Title style={{color:"white",textAlign:"center"}}>Tutoring</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        <Col className="grid__element">

        <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216"}}>
        <Card.Img height="200px" variant="top" src="/images/pain.jpg" />
        <Card.Body>
        <Card.Title style={{color:"white",textAlign:"center"}}>Pain and Palliative</Card.Title>
        </Card.Body>
        </Card>

        </Col>
        </Row>

        </Container>
        </>
    )
}

export default Categories
