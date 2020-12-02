import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Categories() {

    let category_row1=[
        {
            name:"Disaster Management System",
            image:"/images/dis.jpg"
        },
        {
            name:"Technical Support",
            image:"/images/ts.jpg"
        },
        {
            name:"Food Supply",
            image:"/images/food.webp"
        }]
    let category_row2=[
        {
            name:"Blood Donation",
            image:"images/blood.jpg"
        },
        {
            name:"Tutoring",
            image:"/images/tut.jpg"
        },
        {
            name:"Pain and Palliative",
            image:"/images/pain.jpg"
        }
    ]

    return (
        <>
        <Container className="grid">
        <Row className="row">
        {category_row1.map(category => (
            <Col className="grid__element">
            <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216",borderRadius:"30px"}}>
            <Link to="/disaster" style={{textDecoration:"none"}}>
            <Card.Img style={{borderRadius:"30px 30px 0px 0px"}}height="200px" variant="top" src={category.image} />
            <Card.Body>
            <Card.Title style={{color:"white",textAlign:"center"}}>{category.name}</Card.Title>
            </Card.Body>
            </Link>
            </Card>
            </Col>
        ))}
        </Row>

        <Row className="row">
        {category_row2.map(category => (
            <Col className="grid__element">
            <Card style={{ width: '20rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216",borderRadius:"30px"}}>
            <Link to="/disaster" style={{textDecoration:"none"}}>
            <Card.Img style={{borderRadius:"30px 30px 0px 0px"}}height="200px" variant="top" src={category.image} />
            <Card.Body>
            <Card.Title style={{color:"white",textAlign:"center"}}>{category.name}</Card.Title>
            </Card.Body>
            </Link>
            </Card>
            </Col>
        ))}
        </Row>

        </Container>
        </>
    )
}

export default Categories
