import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
function Navbar2() {
    return (

        <Nav className="justify-content-end nav2">
        <Nav.Item className="drop">Activities</Nav.Item>
        <Nav.Item className="drop">About Us</Nav.Item>
        <Nav.Item className="drop">Contact Us</Nav.Item> 
        </Nav>
    
    )
}

export default Navbar2
