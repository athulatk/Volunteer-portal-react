import React,{useState} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import Login from '../Login'
function Navbar1(){

    const [see,setSee]=useState(false);
    const handleClose = () => setSee(false);
    const handleShow = () => setSee(true);


    return (
        <>
        <nav className="nav">
            <div className="head">
            <img className="header__logo" src="images/brand.png" alt=""/>
            </div>
                <ul className="nav__buttons">
                    <li><Link to="/signup"><button className="nav__btn">Sign Up</button></Link></li>
                    <li><button onClick={handleShow} className="nav__btn">Log In</button></li>
                </ul>

        </nav>


        <Login see={see} handleClose={handleClose} handleShow={handleShow} setSee={setSee}/>

        </>
    )
}

export default Navbar1
