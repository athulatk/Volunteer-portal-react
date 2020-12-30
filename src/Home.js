import React,{useState,useEffect}from 'react'
import {Row,Col} from 'react-bootstrap'
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
        <div>
            <Navbar3/>
            <Navbar2/>
            <Row>
            <Col sm={3}>
            <Urgentneeds/>
            </Col>
            <Col sm={9}>
            <div>
            <h3 style={{textAlign:"center",color:"#981041",marginTop:"2%"}}>Volunteer Here!</h3>
            <Categories/>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default Home
