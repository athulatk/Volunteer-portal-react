import React,{useState,useEffect}from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Navbar3 from './components/Navbar3'
import Navbar2 from './components/Navbar2'
import Urgentneeds from './components/Urgentneeds'
import Categories from './components/Categories'
import {LoginContext} from './LoginContext'
import { Redirect } from 'react-router-dom'
function Home() {
    const [loginstatus,setLoginstatus]=useState(LoginContext);
    useEffect(() => {
        if(!loginstatus.logged){
            return <Redirect to="/"/>
        }
    }, [])
    
             
    return (
        <div className="home" style={{minHeight:'100vh'}}>
            <Navbar3/>
            <Navbar2/>
            <Container fluid>
            <Row>
            <Col lg={3}>
            <Urgentneeds/>
            </Col>
            <Col>
            <div>
            <h3 style={{textAlign:"center",color:"#981041",marginTop:"2%"}}>Volunteer Here!</h3>
            <Categories/>
            </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Home
