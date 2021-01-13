import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Categoriesorg() {

    let category_row1=[
        {
            name:"Disaster Management Support",
            image:"/images/dis.jpg",
            link:"/disasterorg"
        },
        {
            name:"Technical Support",
            image:"/images/ts.jpg",
            link:"/disasterorg"
        },
        {
            name:"Food Supply",
            image:"/images/food.webp",
            link:"/disasterorg"
        }]
    let category_row2=[
        {
            name:"Blood Donation",
            image:"images/blood.jpg",
            link:"/bloodorg"
        },
        {
            name:"Tutoring",
            image:"/images/tut.jpg",
            link:"/disasterorg"
        },
        {
            name:"Pain and Palliative",
            image:"/images/pain.jpg",
            link:"/disasterorg"
        }
    ]

    return (
        <div className="categories">
        <Container className="grid">
        <Row className="row">
        {category_row1.map(category => (
            <Col className="grid__element">
            <Card className="card-sp" style={{ width: '20rem', height:'18rem' ,margin:"5% 5% 5% 5%",backgroundColor:"#F58216",borderRadius:"30px"}}>
            <Link to={category.link} style={{textDecoration:"none"}}>
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
            <Card className="card-sp" style={{ width: '20rem' ,height:'18rem',margin:"5% 5% 5% 5%",backgroundColor:"#F58216",borderRadius:"30px"}}>
            <Link to={category.link} style={{textDecoration:"none"}}>
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
        </div>
    )
}

export default Categoriesorg

